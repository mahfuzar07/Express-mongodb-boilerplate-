const mongoose = require("mongoose");

var HomeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Home", HomeSchema);
