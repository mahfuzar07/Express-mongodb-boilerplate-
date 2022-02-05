const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();
// ========request connection==========
app.use(express.json());
// ========database connection==========

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log('dtabase connection successfull');
  })
  .catch((err) => console.log(err));

// ========routes==========
const homeroute = require('./routes/home');
app.use(homeroute);

// ========set static folder==========
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// ========server listener==========
const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, () => {
  console.log(`server is running successfully at http://${HOST}:${PORT}`);
});
