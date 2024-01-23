const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    "id":{
        type:Number
    },
    "title":{
        type:String,
        required:true,
        default:"This is a product title"
    },
    "price":{
        type:Number,
        required:true,
        default:0
    },
    "description":{
        type:String,
        required:true,
        default:"This is a product"
    },
    "category":{
        type:String,
        required:true,
        default:"This is a product"
    },
    "image":{
        type:String,
        required:true,
        default:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    "ratings":{
            "rate":{
                type:Number,
                default:4
            },
            "count":{
                type:Number,
                default:0
            }
        
    }

},{timestamps:true})
const Product=mongoose.model("Product",productSchema);
module.exports=Product;