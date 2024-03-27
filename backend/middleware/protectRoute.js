import jwt from "jsonwebtoken";
import User from "../models/User.js";
export const protectRoute= async(req, res, next)=>{
    try{
        const token= req.cookies.jwt;
        if(!token){
            return res.status(401).json({
            
                error:"Unauthorized access"
            })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if(!decode){
            return res.status(401).json({
             
                error:"Unauthorized access-invalid token"
            })
        }

        const user= await User.findById(decode.userId).select("-password")
        if(!user){
            return res.status(404).json({
            
                success:false,
                error:"user not found"
            })
        }
        req.user=user
        next();
        // res.status(200).json({
        //     success:true,

        // })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            error:"Internal server error"
        })
    }
}

