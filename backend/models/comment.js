const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    commentedby: String,
    profile_img_url: String,
    createdby: String,
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

module.exports = mongoose.model('Comment', commentSchema);