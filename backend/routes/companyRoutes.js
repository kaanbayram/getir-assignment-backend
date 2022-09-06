const express = require('express')
const router = express.Router()
const {
    getCompanies
} = require('../controllers/companyController')

router.route('/').get(getCompanies);

module.exports = router
