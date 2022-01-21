const express = require('express');
const router = express.Router();
const Upload = require("../models/Upload");

router.route("/create").post((req, res)=>{
    const title = req.body.title;
    const desc = req.body.desc;
    const img = req.body.img;
    const categories = req.body.categories;
    const color = req.body.color;
    const price = req.body.price;
    const model = req.body.model;
    const year = req.body.year;


    const newObject = new Upload({
        title,
        desc,
        img,
        categories,
        color,
        price,
        model,
        year
    });
    newObject.save();
}

)

module.exports = router;