require("dotenv").config();
const express = require("express");
const ImageKit = require("@imagekit/nodejs"); // ✅ official Node.js SDK
const cors = require("cors");
const app = express();

app.use(cors());

// initialize ImageKit
const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// authentication endpoint
app.get("/auth", (req, res) => {
  const results = client.helper.getAuthenticationParameters(); // ✅ correct method
  res.send({
    ...results,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  });
});

app.listen(4000, () => {
  console.log("✅ Server running at http://localhost:4000");
});
