const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    price: Number,
    img_url: String,
    createdby: String,
    productowner: String,
});

searchSchema.index({ '$**': 'text' });