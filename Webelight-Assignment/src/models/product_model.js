const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        title:{type:String, required:true},
        price:{type:Number, required:true},
        brand:{type:String, required:true},
        category:{type:String, required:true}
    },{
        versionKey:false,
        timestamps:true
    }
)
const Product = new mongoose.model("product", productSchema);
module.exports = Product;