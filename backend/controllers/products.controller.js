const data = require('../app.json');
// const parsedData = JSON.parse(data);

exports.getAll = (req, res) => {
  res.json(data.products);
};
