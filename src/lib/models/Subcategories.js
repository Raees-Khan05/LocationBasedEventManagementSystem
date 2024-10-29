import mongoose from "mongoose";
const {Schema} = mongoose;


    const subCategorySchema = new Schema({
        title : String,
        description: String,
        thumbnail : String,
        category : {type : mongoose.Types.ObjectId , ref: "Categories"}
    })
    
    export const SubCategoryModel = mongoose.model('Subcategories' , subCategorySchema);