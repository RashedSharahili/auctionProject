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
                    userId:user.id
                }
            })

            if(profile) {

                res.status(200).json({msg:"user created successfully!"})
            }

        }
    }catch(e){
        res.status(500).json({msg:`Error: ${e}`});
    }
}



/////////////////////////////////////////////////////////////





export const login = async (req:Request, res:Response) => {
    try {
        let l_user = req.body as User
        

        let user = await prisma.user.findFirst({
            where: {
                email: l_user.email
            }
        })
        
        

        if(user) {
            if (await argon2.verify(user.password, l_user.password)) {

                console.log(user);

                let enToken = jwt.sign({ id: user.id, email: user.email }, process.env.API_SECRET as string, { expiresIn: "1 day" })

                // console.log(enToken);

                return res.status(200).json({ message: `Welcome Back ${user.email}`, token: enToken })

            } else {

                return res.status(401).json({ message: "اسم المستخدم أو كلمة المرور غير صحيحة" })
            }
    
        } else {

            return res.status(401).json({ message: "اسم المستخدم أو كلمة المرور غير صحيحة" })
        }
        

        throw("there was an error, try again!");

    } catch(err) {

        res.json(err)
    }

}



// export const LogOut = async (req:Request, res:Response)=>{
//     try{
//         let users= await prisma.user.delete(res.)
//     }
//     catch(e){}
// }