

const { status201, status400, status500, status200, status404 } = require('../helpers/httpResponses');
const Product = require('../models/product.model');

const createProduct = async (req, res) => {
  try {
    let newProduct = new Product(req.body);
    newProduct = await newProduct.save();
    status201(res, newProduct);
  } catch (error) {
    status400(res, error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    status200(res, products);
  } catch (error) {
    status500(res, error);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return status404(res, { message: 'Product not found' });
    }
    status200(res, product);
  } catch (error) {
    status500(res, error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return status404(res, { message: 'Product not found' });
    }
    status200(res, product);
  } catch (error) {
    status400(res, error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return status404(res, { message: 'Product not found' });
    }
    status200(res, product);
  } catch (error) {
    status500(res, error);
  }
};


module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};