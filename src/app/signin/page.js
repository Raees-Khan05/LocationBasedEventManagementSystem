import { redirect } from "next/navigation";
import { auth, signIn } from "../../../auth"

 
export default async function SignIn() {
    const session = await auth();
    if(session){
        if(session.user.role == 'user') redirect('/')
        if(session.user.role == 'admin') redirect('/admin/dashboard')
    }
  return (
    <div className="min-h-screen flex justify-center items-center">
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="text-center text-2xl font-sans font-semibold">Signin with Google</button>
    </form>
    </div>
  )
} 