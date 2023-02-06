// import express from "express";
// import cors from "cors";
// import * as dotenv from "dotenv";
// import Jimp from "jimp";
// import { converBase64ToImage } from "convert-base64-to-image";
// import Tesseract, { createWorker } from "tesseract.js";
// import resemble from "node-resemble-js";
// import tesseract from "node-tesseract-ocr";
// // import resemble from "resemblejs";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", async (req, res) => {
//   const example1 = await Jimp.read("./a.jpeg");
//   const example2 = await Jimp.read("./a3.jpeg");
//   const diff = Jimp.diff(example1, example2);
//   const result = diff.percent;
//   res.status(200).send({
//     message: "This is image deff AI APP",
//     result,
//   });
// });

// app.post("/", async (req, res) => {
//   try {
//     if (req.body.img !== null) {
//       const base64 = req.body?.img;
//       const pathToSaveImage = "./image.png";
//       converBase64ToImage(base64, pathToSaveImage);

//       const config = {
//         lang: "eng",
//         oem: 1,
//         psm: 3,
//       };

//       // var diffi = await resemble("./image.png")
//       //   .compareTo("./A.png")
//       //   .ignoreColors()
//       //   .onComplete(function (dt) {
//       //     console.log(100 - dt.misMatchPercentage);
//       //     // console.log(dt);
//       //   });

//       //   async function compareImages(image1Url, image2Url) {

//       //     const image1 = await Jimp.read(image1Url);
//       //     const image2 = await Jimp.read(image2Url);
//       //     // Perceived distance
//       //     const distance = Jimp.distance(image1, image2);
//       //     // Pixel difference
//       //     const diff = Jimp.diff(image1, image2);

//       //     console.log(`compareImages: distance: ${distance.toFixed(3)}, diff.percent: ${diff.percent.toFixed(3)}`);
//       //     if (distance < 0.15 || diff.percent < 0.15) {
//       //         console.log("compareImages: Images match!");
//       //         return true;
//       //     } else {
//       //         console.log("compareImages: Images do NOT match!");
//       //         return false;
//       //     }
//       // }

//       // const usFlag = "https://flaglane.com/download/american-flag/american-flag-small.jpg";
//       // const canadianFlagJpg = "https://flaglane.com/download/canadian-flag/canadian-flag-small.jpg";
//       // const canadianFlagPng = "https://flaglane.com/download/canadian-flag/canadian-flag-small.png";

//       // These should not match.
//       // compareImages(usFlag, canadianFlagJpg);

//       // // These should match.
//       // compareImages(canadianFlagJpg, canadianFlagPng);

//       const example1 = await Jimp.read(`./Alphabet/${req.body?.title}(1).png`);
//       // console.log(example1)
//       const example2 = await Jimp.read("./image.png");
//       // const testing = example1.blit(example2);
//       // console.log(testing);
//       const check1 = example1.resize(300, Jimp.AUTO);
//       const check2 = example2.resize(300, Jimp.AUTO);
//       const distance = Jimp.distance(example1, example2);
//       const diff = Jimp.diff(check1, check2);
//       const result = diff.percent.toFixed(3) * 1000;
//       // console.log(
//       //   `compareImages: distance: ${distance.toFixed(3)}, diff.percent: ${
//       //     diff.percent.toFixed(3) * 1000
//       //   }`
//       // );

//       // Tesseract.recognize("./image.png")
//       //   .setOptions({
//       //     tessedit_char_whitelist:
//       //       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
//       //   })
//       //   .then(function (result) {
//       //     console.log(result.text);
//       //   });
//       // Tesseract.recognize("./image.png", {
//       //   tessedit_char_whitelist:
//       //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
//       // })
//       //   .then(function (result) {
//       //     console.log(result.text);
//       //   })
//       //   .catch(function (err) {
//       //     console.error(err);
//       //   });

//       const txt = await Tesseract.recognize("./image.png", "eng", {
//         logger: (m) => m,
//       }).then(({ data: { text } }) => {
//         console.log(text);
//         return text;
//       });
//       // console.log(txt);
//       res.status(200).send({
//         text: txt,
//         result: 100 - result,
//         // result: 100 - result * 100,
//       });

//       // const txt = await Tesseract.recognize(`./${req.body?.title}.png`, "eng", {
//       //   logger: (m) => m,
//       // }).then(({ data: { text } }) => {
//       //   console.log(text);
//       // });

//       // res.status(200).send({
//       //   // text: txt,
//       //   result: 100 - result,
//       //   // result: 100 - result * 100,
//       // });
//     } else {
//       console.log("some think error");
//     }

//     // const diff = Jimp.diff(example1, example2);

//     // const txt = await Tesseract.recognize("./image.png", "eng", {
//     //   logger: (m) => m,
//     // }).then(({ data: { text } }) => {
//     //   console.log(text);
//     //   return text;
//     // });
//     // // console.log(txt);
//     // res.status(200).send({
//     //   text: txt,
//     //   result: 100 - result,
//     //   // result: 100 - result * 100,
//     // });
//   } catch (error) {
//     console.log("catch error", error.message);
//   }
// });

// app.listen(process.env.PORT || 4000, () =>
//   console.log("Server is running on port 4000")
// );

// index.js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;
