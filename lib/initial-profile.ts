import { db } from "@/lib/db";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

export const initialProfile = async () =>{ 

 try {
    const user = await currentUser()
    console.log(user, 'levi')

    if(!user){
        return redirectToSignIn
    }

    const profile = await  db.profile.findUnique({
        where:{
            userId:user.id
        }
    })

    if(profile){
        return profile;
    }

    const newProfle = await db.profile.create({
        data:{
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    })

    return newProfle;
 } catch (error) {
        console.log( 'levi error' , error)
 }


}