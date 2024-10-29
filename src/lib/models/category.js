import mongoose from "mongoose";
const {Schema} = mongoose;


    const categorySchema = new Schema({
        title : String,
        description: String,
        thumbnail : String,
    })
    
    export const CategoryModel = mongoose.model('Categories' , categorySchema);