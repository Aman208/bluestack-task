const { ObjectID } = require("mongodb");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const TrendingVideo = require("../model/TrendingVideo");
const YoutubeCssSelector = require("../constant/constant");
var trending_page_url = "https://www.youtube.com/feed/trending";

exports.scrapVideos = async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
      ],
    });
    const page = await browser.newPage();
    await page.goto(trending_page_url);
    const html = await page.content();
    await getTrendingVideoPageContent(html, res);

    await browser.close();
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

function getYoutubeID(url) {
  var id = url.match(
    /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
  )[1];
  return id;
}

function getTrendingVideoPageContent(data, res) {
  const $ = cheerio.load(data);
  var id = (video_url = video_title = likes = dislikes = "");

  try {
    $(YoutubeCssSelector.video_container).each(function (index, element) {
      video_title = $(element)
        .find(YoutubeCssSelector.video_title)
        .text()
        .trim();
      if (video_title != "") {
        video_url =
          YoutubeCssSelector.youtube_domain +
          $(element).find(YoutubeCssSelector.video_title).attr("href");
        id = getYoutubeID(video_url);

        var video = new TrendingVideo({
          video_title: video_title,
          video_url: video_url,
          video_description: $(element)
            .find(YoutubeCssSelector.video_description)
            .text()
            .trim(),
          video_thumbnail_image_url:
            "https://i.ytimg.com/vi/" + id + "/mqdefault.jpg",
          video_embed_url: YoutubeCssSelector.embed_url + id,
          total_views: $(element)
            .find(YoutubeCssSelector.total_views)
            .text()
            .replace(" views", ""),
          total_likes: likes,
          total_dislikes: dislikes,
          channel_title: $(element)
            .find(YoutubeCssSelector.channel_title)
            .eq(0)
            .text()
            .trim(),
          channel_description:
            "This is the channel Link: " +
            YoutubeCssSelector.youtube_domain +
            $(element)
              .find(YoutubeCssSelector.channel_description)
              .attr("href"),
          channel_subscribers: "",
        });

        video
          .save()
          .then()
          .catch((e) => console.log("Duplicate Records "));
      } else {
        console.log("Title empty");
      }
    });

    res
      .status(200)
      .json({ message: "Trending Youtube Videos successfully saved in DB" });
  } catch (err) {
    res.status(500).json({ message: "Error in Scraping" });
  }
}

exports.fetchAllVideos = async (req, res) => {
  TrendingVideo.find({})
    .sort({ created_at: 1 })
    .then((videosList) => {
      res.status(200).json({
        message: "Success!",
        videos: videosList,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

exports.fetchVideoById = async (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send("No Result Found");
  }

  TrendingVideo.findOne({ _id: id })
    .then((video) => {
      if (!video) {
        return res.status(404).json({ message: "No Result Found" });
      }
      res.status(200).json({
        message: "Success!",
        video: video,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};
