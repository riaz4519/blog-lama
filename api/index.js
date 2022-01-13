const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to mongo"))
  .catch((error) => console.error(error));

app.listen("5000", () => {
  console.log("Backend is running");
});
