const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const Uploadimage = require('./routes/Uploadimage');
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "PUT", "DELETE", "PATCH", "POST"],
    allowedHeaders: "*"
}))
if(process.env.PRODUCTION===dev){
    app.use(morgan('dev'))
}

app.use('/api/v1',Uploadimage);
module.exports=app;
//https://mern-shoppingcart-app-frontend.vercel.app/