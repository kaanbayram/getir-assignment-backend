const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')

// @desc    Get products
// @route   GET /api/products
// @access  Private
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products)
})

const getProduct = asyncHandler(async (req, res) => {
    const products = await Product.find({ _id: req.params.id });
    res.status(200).json(products)
});




module.exports = {
    getProducts,
    getProduct
}
