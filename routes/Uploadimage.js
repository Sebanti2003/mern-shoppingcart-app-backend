const express=require('express');
const Uploadimage=express.Router();
const {createproduct,getproducts}=require('../controllers/Productcontrol.js');
Uploadimage.route('/postproduct').post(createproduct);
Uploadimage.route('/getproducts').get(getproducts);
module.exports=Uploadimage;