const express = require("express");
const cors = require("cors");
const Jimp = require("jimp");
const { converBase64ToImage } = require("convert-base64-to-image");
const Tesseract = require("tesseract.js");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "This is image deff AI APP",
  });
});

app.post("/", async (req, res) => {
  try {
    if (req.body.img !== null) {
      const base64 = req.body?.img;
      const pathToSaveImage = "./image.png";
      converBase64ToImage(base64, pathToSaveImage);
      const example1 = await Jimp.read(`./Alphabet/${req.body?.title}(1).png`);
      const example2 = await Jimp.read("./image.png");
      const check1 = example1.resize(300, Jimp.AUTO);
      const check2 = example2.resize(300, Jimp.AUTO);
      const distance = Jimp.distance(example1, example2);
      const diff = Jimp.diff(check1, check2);
      const result = diff.percent.toFixed(3) * 1000;
      const txt = await Tesseract.recognize("./image.png", "eng", {
        logger: (m) => m,
      }).then(({ data: { text } }) => {
        return text;
      });
      res.status(200).send({
        text: txt,
        result: 100 - result,
      });
    } else {
      res.status(200).send({
        message: "some think wrong",
      });
    }
  } catch (error) {
    res.status(401).send({
      message: error.message,
    });
  }
});

app.listen(process.env.PORT || 4000, () =>
  console.log("Server is running on port 4000")
);
