import connectDB from "@/lib/db/connectDB";
import { CategoryModal } from "@/lib/models/category";
import { EventModal } from "@/lib/models/Events";
import { UserModel } from "@/lib/models/User";
import { SubCategoryModel } from "@/lib/models/subCategories";

export async function GET(request , { params }) {
    await connectDB();
  
    const event = await EventModal.findOne({ _id: params.id })
    .populate("category", "title")
      .populate("createdBy", "fullname email profileImg")
      .populate("subcategory", "title")
     
  
    return Response.json(
      {
        msg: "Events Fetched Successfully",
        event,
      },
      { status: 200 }
    );
  }