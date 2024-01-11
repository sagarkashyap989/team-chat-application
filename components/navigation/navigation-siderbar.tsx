import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

import {Separator} from '@/components/ui/separator'
import NavigationAction from "./navigation-action";
import ScrollAreaDiv from './scroll-area'
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";


const NavigationSidebar =async () => {

    const profile = await currentProfile();

    if(!profile){
        return redirect('/')
    }


    const servers = await db.server.findMany({
        where:{
            members:{
                some:{
                    profileId: profile.id
                }
            }
        }
    })

    return ( 
        <div className="flex space-y-4 flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">

            <NavigationAction/>
            <Separator
                className="h-[2px] dg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
            />

            <ScrollAreaDiv servers = {servers}/>

            <div className="pb-3 mt-auto flex-items-center flex-col gap-y-4">

                <ModeToggle/>
                <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                        elements:{
                            avatarBox: "h-[48px] w-[48px]"
                        }
                    }}
                />
            </div>

        </div>
     );
}
 
export default NavigationSidebar;