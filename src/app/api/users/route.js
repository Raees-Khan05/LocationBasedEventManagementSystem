import connectDB from "@/lib/db/connectDB";
import { UserModel } from "@/lib/models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



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
    // user exist or not

    const user = await UserModel.findOne({email : obj.email})

    if(user) return Response.json(
        {error : true , msg : "User with this Email already exist"},
        {status : 403}
    )


    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(obj.password, saltRounds);
    obj.password = hashedPassword;

    
    let newUser =  new UserModel(obj);
    await newUser.save();

    var token = jwt.sign({ _id: newUser._id , role : newUser.role }, process.env.JWT_KEY);





    return Response.json({
        msg : "Users Added Successfully",
        user : newUser,
        token,
    } , {status : 201});

}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 