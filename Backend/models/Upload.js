const mongoose = require("mongoose");

const uploadSchema = {
    title: String,
    model: String,
    desc: String,
    img: String,
    categories: Array,
    color: String,
    price: Number,
    year: Number,
}

const Upload = mongoose.model("products", uploadSchema);

module.exports = Upload;