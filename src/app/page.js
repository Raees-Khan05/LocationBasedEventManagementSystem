import Image from "next/image";
import { auth, signOut } from "../../auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function Home() {
        const session = await auth();
  return (
    <div className="min-h-screen">
     <h1 className='font-bold text-2xl text-center pt-10'>Find Your Friend</h1>
     {
      session ?   <form className="flex justify-center items-center pt-10" action={async ()=> {
        "use server";
        await signOut();
       }}>
        <Button type="submit">SignOut</Button>
       </form> : 
       <Link href={'/signin'}>
        <Button>SignOut</Button>
       
       </Link>
     }
   
    </div>
  );
}
