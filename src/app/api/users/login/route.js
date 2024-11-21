import connectDB from "@/lib/db/connectDB";
import { UserModel } from "@/lib/models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

 
export async function POST(request) {
    await connectDB()
    const obj  = await request.json();
    // user exist or not

    const user = await UserModel.findOne({email : obj.email})

    if(!user) return Response.json(
        {error : true , msg : "User not found"},
        {status : 403}
    )

    const isPasswordvalid = await bcrypt.compare(obj.password , user.password);

    if(!isPasswordvalid) return Response.json(
        {error : true , msg : "Password is not Valid."},
        {status : 403}
    )


    

    var token = jwt.sign({ _id: user._id , role : user.role }, process.env.JWT_KEY);

    return Response.json({
        msg : "Users Login Successfully",
        user,
        token,
    } , {status : 200});

}
 
