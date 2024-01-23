process.setMaxListeners(1000)
const dotenv=require('dotenv');
dotenv.config();
const app=require('./app.js')
const port=process.env.PORT;
const database=require('./database/databasefile.js');
database();
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})
//https://backend-servicee.onrender.com