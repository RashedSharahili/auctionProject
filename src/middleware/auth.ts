import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';

interface User{
    id: string,
    name: string
}
const auth = (req:Request, res:Response, next:NextFunction)=>{
    try{
        const token = req.headers.authorization;

        if(!token){
            return res.status(403).json({message: "You are not authorized, please provide a valid token."});
        }
        
        console.log(token)
        const user = jwt.verify(token,process.env.API_SECRET as string) as User;
        res.locals.user = user;
        console.log(user) 
        next();
    }catch(e){
        return  res.status(403).json({message: "You are not authorized, please provide a valid token."})
    }
}

export default auth;