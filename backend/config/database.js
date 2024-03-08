import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect =async () =>{
    try{
        mongoose.connect(process.env.MONGODB_URL,{
       
        })}
    
    // .then(()=>console.log("DB connect Successfully"))
    catch(error){
        console.log("DB connection failed");
        console.log(error);
        process.exit(1);
    }
}

export default connect;