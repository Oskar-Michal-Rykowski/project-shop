const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String, required: true },
  describtion: { type: String, required: true },
  photos: { type: Array, required: true },
  photo: { type: String, required: true },
  priceFrom: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
