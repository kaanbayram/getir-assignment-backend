const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        tags: {
            type: mongoose.Schema.Types.Array,
        },
        price: {
            type: mongoose.Schema.Types.Number,
        },
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        slug: {
            type: String
        },
        added: {
            type: Number
        },
        manufacturer: {
            type: String
        },
        itemType: {
            type: String
        }
    },
    {
        timestamps: true,
        collection: "products",
        strict: false
    }
)

const Product = mongoose.model('Products', productSchema)

module.exports = Product;
