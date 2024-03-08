import mongoose from 'mongoose';

const userSchema= new mongoose.Schema(
    {
        fullName:{
            type:String,
            required: true,
            trim: true,
        },
        email:{
            type:String,
            required: true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
        },
        
        image:{
            type:String,
            default:"",
        },
        contaactNumber:{
            type:Number,
            trim:true
        },
        // gender:{
        //     type:String,
        //     required:true,
        //     enum:["male","female"]
        // }


    },
    {timestamps:true}
)
const user=mongoose.model("User", userSchema);
export default user;

