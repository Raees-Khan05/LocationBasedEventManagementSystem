import connectDB from "@/lib/db/connectDB";
import { CategoryModal } from "@/lib/models/category";
import { EventModal } from "@/lib/models/Events";
import { UserModel } from "@/lib/models/User";
import { SubCategoryModel } from "@/lib/models/subCategories";

export async function GET(request) {
  await connectDB();
  const reqUrl = request.url;
  const query = {};
  const events = await EventModal.find(query)
  .populate("category","title")
  .populate("createdBy" , "fullname email profileImg")
  .populate("subcategory" , "title");
 
  return Response.json(
    {
      msg: "Events Fetched Successfully",
      events,
    },
    { status: 200 }
  );
   
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();


  const user = await UserModel.findOne({_id : obj.createdBy})
  if(!user) 
    return Response.json(
      {
        msg: "User not found",
        error : true,
        data : null
      },
      { status: 403 }
    );

  let newEvent = new EventModal(obj);
  await newEvent.save();

  return Response.json(
    {
      msg: "Event Added Successfully",
      event: newEvent,
    },
    { status: 201 }
  );
}
