const asyncHandler = require('express-async-handler')

const Company = require('../models/companyModel')

// @desc    Get Companies
// @route   GET /api/companies
// @access  Private
const getCompanies = asyncHandler(async (req, res) => {
    const companies = await Company.find({});
    res.status(200).json(companies)
})


module.exports = {
    getCompanies
}
