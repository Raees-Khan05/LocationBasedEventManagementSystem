import connectDB from "@/lib/db/connectDB"
import { UserModel } from "@/lib/models/User";
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

  const handleUser = async (profile)=>{
      await connectDB();
      const user = await UserModel.findOne({email : profile.email});
      if(user) return user;

      let newUser = await new UserModel({
        fullname : profile.name,
        email : profile.email,
        profileImg : profile.picture
      });
      newUser = await newUser.save();
      return newUser;
  }
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
   callbacks: {
    async signIn({ account, profile }) {
      console.log("account==>" , account);
      console.log("profile==>" , profile);
      const user = await handleUser(profile); 
      return {...profile , role : user.role}
      // return user;
    },

   async jwt({token , user}) {
     const userFromDB = await handleUser(token); 
     console.log("userfromDB" , userFromDB);
     


      if(user) {
        token._id = userFromDB._id
        token.role = userFromDB.role

      }
      return token
    },
   
    session({session , token}) {
      session.user.id = token.id
      session.user._id = token._id
      session.user.role = token.role
      return session
    }
  },
})