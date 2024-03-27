import mongoose from "mongoose";


const connect =async () =>{
    try{
        mongoose.connect(process.env.MONGODB_URL,{
       
        })}
    
    // .then(()=>console.log("DB connect Successfully"))
    catch(error){
        console.log("DB connection failed");
        console.log(error.message);
    }
}

export default connect;