import mongoose from "mongoose";
const {Schema} = mongoose;


    const userSchema = new Schema({
        fullName : String,
        email : String,
        password : String,
        location : {
            lat : Number,
            long : Number
        },
        profileImage : String,
        address : String,
        bio : String
    })
    
    export const UserModel = mongoose.models.Users || mongoose.model('Users' , userSchema);