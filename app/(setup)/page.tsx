import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import InitialModal from "@/components/modal/initial-modal";
const  SetupPage = async() => {

    const profile =  await initialProfile()
    console.log(profile, 'levi page')
    const server =  await db.server.findFirst({
        where:{
            members:{
                some:{
                    profileId: profile?.id 
                }
            }
        }
    })

    if(server){
        return redirect(`/servers/${server.id}`)
    }

    return <InitialModal />;
}
 
export default SetupPage;


// import { UserButton } from "@clerk/nextjs";
// import { ModeToggle } from "@/components/mode-toggle"; 

// export default function Home() {
//   return (
//     <div>
//       <UserButton afterSignOutUrl="/"/>
//       <ModeToggle />
//     </div>
//   )
// }