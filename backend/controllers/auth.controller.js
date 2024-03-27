import dotenv from 'dotenv';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

import generateTokenAndSetCookie from "../utils/generateToken.js";
dotenv.config();
export const signup= async(req, res)=>{
    try{
        const {fullName, email, password, confirmPassword, contactNumber}= req.body;
    if(!fullName || !email || !password || !confirmPassword || !contactNumber){
        return res.status(403).json({
            success:false,
            message:"All field are required to fill"
        })
    }
    if(password !== confirmPassword){
        return res.status(403).json({
            success:false,
            message:"Both password do not matched"})
    }

    const existingUser= await User.findOne({email});
    if(existingUser){
        return res.status(400).json({
            success: false,
            message:"User already exist"
        })
    }

    //hash password
    const encryptPassword= await bcrypt.hash(password, 10);
    
    const profilePic =`https://avatar.iran.liara.run/public/`;
    const user= await User.create({
        fullName,
        email,
        password:encryptPassword,
        contactNumber,
        image:profilePic
    
    })
    if (user) {
        // Generate JWT token here
        generateTokenAndSetCookie(user._id, res);
        await user.save();

        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            message:"successfully account created",
            image:user.profilePic
           
        });
    } else {
        res.status(400).json({ error: "Invalid user data" });
    }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
      message: "User cannot be registered. Please try again.",
        })
    }
}; 
export const login= async(req, res)=>{
    try{
        const {email, password}=req.body;
        
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required to fill"
            })
        }
        
        const checkUser= await User.findOne({email});
        
        const isPasswordCorrect=await bcrypt.compare(password, checkUser?.password || "")
        if(!checkUser || !isPasswordCorrect){
            return res.status(400).json({
                success:false,
                message:"Invalid username or password"
            })
        }
        generateTokenAndSetCookie(checkUser._id, res);
       
        res.status(200).json({
			_id: checkUser._id,
			fullName: checkUser.fullName,
			email: checkUser.email,
            image:checkUser.profilePic
			
		});
           
        
       }
    catch(error){
        console.log(error)
        return res.status(400).json({
            success:false,
            message:"Something went wrong while login"
        })

    }
}
export const logout= async(req, res)=>{
    try{
        res.cookie("jwt","", {maxAge:0})
        res.status(200).json({message: "Logged Out successfully"})

    }
    catch(error){
        console.log(error)
        return res.status(400).json({
            success:false,
            message:"Something went wrong while login"
        })
    }
    
}