const express = require("express");
const router = express.Router();

const TrendVideoController = require("../controller/trend_video_controller");

router.get("/scrapVideos", TrendVideoController.scrapVideos);
router.get("/fetchAllVideos", TrendVideoController.fetchAllVideos);
router.get("/fetchVideoById/:id", TrendVideoController.fetchVideoById);

module.exports = router;
