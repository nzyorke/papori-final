const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

module.exports = mongoose.model('Favourite', favouriteSchema);