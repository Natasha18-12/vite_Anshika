const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  date: Date,
  product: String,
  category: String,
  amount: Number
});

module.exports = mongoose.model("Sale", saleSchema);
