const mongoose = require("mongoose");

 const trend_video = new mongoose.Schema({
  video_title: {
    type: String,
    required: true,
    trim: true,
  },
  video_url: {
    type: String,
    required: true,
    validate: async (value) => {
      try {
          const result = await TrendingVideo.findOne({ video_url : value })
          if (result) throw new Error("duplicity detected: id :" + value);
      } catch (error) {
          throw new Error(error);
      }
  }
  },
  video_embed_url: {
    type: String,
    require: true,
  },
  video_description: {
    type: String,
  },
  video_thumbnail_image_url: {
    type: String,
  },
  total_views: {
    type: String,
  },
  total_likes: {
    type: String,
  },
  total_dislikes: {
    type: String,
  },
  channel_title: {
    type: String,
  },
  channel_description: {
    type: String,
  },
  channel_thumbnail_image_url: {
    type: String,
  },
  total_channel_subscribers: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
  },
});


var TrendingVideo = mongoose.model("TrendingVideo",trend_video);

module.exports = TrendingVideo;
