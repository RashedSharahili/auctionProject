import {Request, Response} from 'express';
import {prisma} from '../config/db';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';
import {User} from '@prisma/client';


////////////////////////////////////////////////////////////////////

export const NewRegistration = async (req:Request, res:Response) =>{
    const hash = await argon2.hash(req.body.password);
    try{
        const user = await prisma.user.create({
            data:{
                email: req.body.email,
                password: hash
            }
        });
        if(user){
            res.status(200).json({msg:"user created!"})
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

                let enToken = jwt.sign({ id: user.id, email: user.email }, process.env.TOKEN_SECRET as string, { expiresIn: "300000ms" })

                // console.log(enToken);

                return res.status(200).json({ message: `Welcome Back ${user.email}`, token: enToken })

            } else {

                return res.status(200).json({ message: "Invalid username or password" })
            }
    
        } else {

            return res.status(200).json({ message: "Invalid username or password" })
        }
        

        throw("there was an error, try again!");

    } catch(err) {

        res.json(err)
    }

}




// export const UpdateProfile = async (req:Request, res:Response)=>{

//     try{

//         let users= await prisma.profile.update({
//             where:{
//                 userId: res.locals.user.id,
            
//             },
//             data:{
//             name: req.body.name
//             }

//         }

//         )

//     }

// catch(e){}

// }



// export const LogOut = async (req:Request, res:Response)=>{

//     try{

//         let users= await prisma.user.delete(res.)



//     }

//     catch(e){}


// }