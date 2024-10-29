import connectDB from "@/lib/db/connectDB";
import { SubCategoryModel } from "@/lib/models/subCategories";



export async function GET(request) {
    await connectDB();
    const reqUrl = request.url;
    const {searchParams} = new URL(reqUrl);
    console.log('searchParams==>' , searchParams);    
    const query = {};
    if(searchParams.get("category")) {
            query.category = searchParams.get("category");
        }
        
        const subCategories = await SubCategoryModel.find(query).populate("category" , "title");
    // const SubCategories = await SubCategoryModel.find(query).populate(
    //     "category",
    //     "title"
    // );
    return Response.json(
        {
            msg : "Subcategories Fetched SuccessFully",
            subCategories,
        },
        {status : 200}
    );
}



export async function POST(request) {
    await connectDB();
    const obj = await request.json();
    let newSubCategory = new SubCategoryModel(obj);
    await newSubCategory.save();

    return Response.json(
        {
            msg : "Subcategory Added Successfully",
            newSubCategory : newSubCategory,
        },
        {status : 201}
    );

    
}