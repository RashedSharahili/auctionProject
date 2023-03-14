import {Request, Response} from 'express';
import {prisma} from '../config/db';
import { Profile } from '@prisma/client';


//post profile


// export const createProfile = async (req:Request, res:Response) => {

//     try {

//         const profile = req.body 

//         await prisma.profile.create({
//             data:profile,
             
            

    
//         });
        

//         res.json({ message: "profile successfully" });

//     } catch(err) {

//         res.json(err);
//     }

// }



export const updateProfile = async(req:Request, res:Response) => {
    
    let u_profile = req.body as Profile

    let { id } = req.params

    let profile = await prisma.profile.updateMany({
        where: {
            id: id,
            userId: res.locals.user.id
        },
        data:u_profile
    })

    if(profile.count == 0) {

        res.status(200).json({ message: "No profile updated" });

    } else {

        return res.status(200).json({ message: "profile updated successfully!" });
    }

    throw("there was an error, try again!");
}


       




