const mongoose = require('mongoose')

const companySchema = mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        slug: {
            type: String,
        },
        name: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String
        },
        state: {
            type: Number
        },
        zip: {
            type: String
        },
        account: {
            type: Number
        },
        contact: {
            type: String
        },
    },
    {
        timestamps: true,
        collection: "companies",
        strict: false
    }
)

const Company = mongoose.model('Companies', companySchema)

module.exports = Company;
