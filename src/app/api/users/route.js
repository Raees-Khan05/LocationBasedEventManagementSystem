import connectDB from "@/lib/db/connectDB";
import { UserModel } from "@/lib/models/User";



export async function GET(request) {
    await connectDB()
    const users = await UserModel.find();
    return Response.json({
        msg : "Users fetched Successfully",
        users,
    } , {status : 200})
}
 
 
export async function POST(request) {
    await connectDB()
    const obj  = await request.json();
    let newUser =  new UserModel(obj);
    await newUser.save();

    return Response.json({
        msg : "Users Added Successfully",
        user : newUser,
    } , {status : 201});

}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 