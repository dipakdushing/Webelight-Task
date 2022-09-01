const express = require("express");
const Product = require("../models/product_model");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const page_size = req.query.page_size || 3; 
    const skip = (page - 1) * page_size;
    let brand;
    if(req.query.brand){
      brand = {brand:req.query.brand}
    }else{
      brand = {};
    }
    const products = await Product.find(brand).skip(skip).limit(page_size).lean().exec();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
router.patch('/:id', async(req,res)=>{
  try {
     const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec()
     return res.status(200).send(product)  
  } catch (error) {
      return res.status(500).send({message: error.message})
  }
})
module.exports = router;
