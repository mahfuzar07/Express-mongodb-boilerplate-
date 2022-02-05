const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();
// ========request connection==========
app.use(express.json());
// ========database connection==========
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("dtabase connection successfull");
  })
  .catch((err) => console.log(err));

// ========routes==========
const homeroute = require("./routes/home");
app.use(homeroute);

// ========set static folder==========
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// ========server listener==========
app.listen(process.env.PORT, () => {
  console.log(`surver running successfull on  port ${process.env.PORT}`);
});
