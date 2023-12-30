import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // NOT A PRFESSIONAL WAY TO SCREATE SCHEMA
    // userName: String,
    // email: String,
    // isActive: Boolean,
    userName: {
        type: String,
        required: true,// username is the required field in our schema 
        unique : true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase : true,
    },
    password: {
        type: String, 
        required: true,
    }
    
},{timestamps : true})

export const User = mongoose.model("User", userSchema)
