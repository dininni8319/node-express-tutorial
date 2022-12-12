const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    name: 'modern bookshelf' 
  });
  res.status(200).json({ products, nbHits: products.length });
}

const getAllProducts = async (req, res) => {
  const { featured } = req.query;

  const queryOBJ = {};

  if (featured) {
    queryOBJ.featured = featured === 'true' ? true : false;
  }
  console.log(queryOBJ);
  const products = await Product.find(queryOBJ);
  res.status(200).json({ products, nbHits: products.length });
}

module.exports = {
  getAllProducts,
  getAllProductsStatic,
}