const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const Uploadimage = require('./routes/Uploadimage');
app.use(express.json());
app.use(cors({
    origin: ["https://shoppingcartfrontend-iwyor2z5d-sebanti2003.vercel.app","*"],
    methods: ["GET", "PUT", "DELETE", "PATCH", "POST"],
    allowedHeaders:["Access-Control-Allow-Origin","*"]
}))

app.use('/api/v1',Uploadimage);
module.exports=app;
//https://mern-shoppingcart-app-frontend.vercel.app/