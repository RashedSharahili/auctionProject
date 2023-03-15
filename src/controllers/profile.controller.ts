import {Request, Response} from 'express';
import {prisma} from '../config/db';
import { Gender, Profile } from '@prisma/client';



export const updateProfile = async(req:Request, res:Response) => {

    try {

        let u_profile = req.body as Profile

    let { id } = req.params

    let profile = await prisma.profile.updateMany({
        where: {
            id: id,
            userId: res.locals.user.id
        },
        data: {
            name: u_profile.name,
            phone_number: u_profile.phone_number,
            gender: u_profile.gender as Gender
        }
    })

    if(profile.count == 0) {

        res.status(404).json({ message: "لم يتم تحديث الملف الشخصي " });

    } else {

        return res.status(200).json({ message: "تم تحديث الملف الشخصي بنجاح" });
    }

    throw("يوجد خطأ , حاول مره اخرى ");
    
    } catch(err) {

        res.status(500).json(err)
    }

}


       




