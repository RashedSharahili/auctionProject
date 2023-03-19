import {Request, Response} from 'express';
import {prisma} from '../config/db';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';
import {User} from '@prisma/client';

export const getAllUsers = async(req:Request, res:Response) => {
    
    let users = await prisma.user.findMany({
        include: {

            
            profile: true
        }
    })

    res.status(200).json({ users, status: res.statusCode })
}


////////////////////////////////////////////////////////////////////

export const NewRegistration = async (req:Request, res:Response) =>{
    const hash = await argon2.hash(req.body.password);
    try{
        const user = await prisma.user.create({
            data:{
                id:res.locals.id,
                email: req.body.email,
                password: hash
            }
        });
        if(user){

            const profile = await prisma.profile.create({
                data: {
                    userId:user.id,
                    name: req.body.name,
                    phone_number: req.body.phone_number,
                    gender:req.body.gender,
                    birthDate:req.body.birthDate 
                }
            })

            if(profile) {

                res.status(200).json({message:"تم أضافة مستخدم"})
            }

        }

        throw("يوجد خطأ ما، حاول مره أخرى")
    }catch(e){
        res.status(500).json({message:`Error: ${e}`});
    }
}



/////////////////////////////////////////////////////////////





export const login = async (req:Request, res:Response) => {
    try {
        let l_user = req.body as User
        

        let user = await prisma.user.findFirst({
            where: {
                email: l_user.email
            },
            include: {
                profile: true
            }
        })
        
        

        if(user) {
            if (await argon2.verify(user.password, l_user.password)) {

                console.log(user);

                let enToken = jwt.sign({ id: user.id, email: user.email, name: user.profile?.name, profileId: user.profile?.id }, process.env.API_SECRET as string, { expiresIn: "1 days" })

                // console.log(enToken);

                return res.status(200).json({ message: `مرحبا بعودتك ${user.profile?.name}`, token: enToken })

            } else {

                return res.status(401).json({ message: "اسم المستخدم أو كلمة المرور غير صحيحة" })
            }
    
        } else {

            return res.status(401).json({ message: "اسم المستخدم أو كلمة المرور غير صحيحة" })
        }
        

        throw("هناك خطأ ما ، حاول مرة أخرى!");

    } catch(err) {

        res.json(err)
    }

}



export const logOut = async (req:Request, res:Response)=>{
    try{
        let user = await prisma.user.findFirst({

            where: {

                id: res.locals.user.id
            }
        })

        if(user) {

            res.status(200).json({ message: "تم تسجيل الخروج بنجاح", status: res.statusCode })

        } else {

            res.status(401).json({ message: "يرجى اعادة تسجيل الدخول" })
        }
    }
    catch(e){

        res.status(500).json(e)
    }
}