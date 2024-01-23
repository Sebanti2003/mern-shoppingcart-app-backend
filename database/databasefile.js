const mongoose=require('mongoose');
const database=async()=>{
    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log("Connected to MongoDatabase!!!!"); 
    } catch (error) {
        console.log(error);
    }
    
}
module.exports=database;