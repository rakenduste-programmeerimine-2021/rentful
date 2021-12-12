const mongoose = require("mongoose");
 


const CartSchema = new mongoose.Schema(
    {
        uderId:{type: String, required: true},
        products:[
            {
                productId:{
                    type: String
                },
                period: {
                    type: Number,
                    default: 1,
                },
            },
        ],

    },{timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);