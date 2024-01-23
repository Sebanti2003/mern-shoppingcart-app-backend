const mongoose=require('mongoose');
const Product=require('../models/Product.model.js')
exports.createproduct=async(req,res)=>{
    const reqobj=req.body;
    try {
        const product=await Product.create(reqobj);
        return res.status(200).json({message:"Product created succesfully!!!",status:200,product})
    } catch (error) {
        return res.status(400).json({message:"failed",error})
    }
}
exports.getproducts=async(req,res)=>{
    try {
        const products=await Product.find();
        return res.status(200).json({message:"Products are shown!!!",status:200,products})
    } catch (error) {
        return res.status(400).json({message:"failed",error})
    }
}
