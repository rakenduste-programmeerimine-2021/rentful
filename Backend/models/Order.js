const mongoose = require("mongoose");
 


const OrderSchema = new mongoose.Schema(
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
        amount: {type: Number, required: true},
        address:{type: Object , require: true},
        status: {type: String, defult: "pending"},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);