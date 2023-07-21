const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'product name must be provided']
    },
    price: {
        type: Number,
        require: [true, 'product price name must be provided']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        // limit the possible options for this property, we go with enum property
        // enum: ['ikea', 'liddy', 'caressa', 'marcos']
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    }
});

module.exports = mongoose.model('Product', productSchema)