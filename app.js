const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const Uploadimage = require('./routes/Uploadimage');
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173","https://mern-shoppingcart-application.onrender.com","https://mern-shoppingcart-app-frontend.vercel.app/"],
    methods:["GET","PUT","DELETE","PATCH","POST"]
}))
if(process.env.PRODUCTION===dev){
    app.use(morgan('dev'))
}

app.use('/api/v1',Uploadimage);
module.exports=app;
//https://mern-shoppingcart-app-frontend.vercel.app/