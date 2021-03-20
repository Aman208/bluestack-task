const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const health = require("./routes/health");
const trend_video = require("./routes/trend_video");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", health);
app.use("/video", trend_video);

mongoose
  .connect(
    "mongodb+srv://aman208:atlas208@cluster0-ss781.mongodb.net/BluestackTask",{
      useNewUrlParser: true , useUnifiedTopology: true 
    }
  )
  .then(() => console.log("connected to MongoDB..."))
  .catch((err) => console.error("could not connect to MongoDB...", err));

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log("listening at port " + port + "...");
});

