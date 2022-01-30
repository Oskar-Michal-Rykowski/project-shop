// const data = require('../app.json');
// const parsedData = JSON.parse(data);
const Product = require('../models/product.model');
// const server = require('../server');

exports.getAll = async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
