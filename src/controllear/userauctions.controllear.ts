

import {Request, Response} from 'express';
import {prisma} from '../config/db';



export const addAuction=async (req:Request,res:Response)=>{

let Auctions=await prisma.userAuction.create({
    where:{
        userId: res.locals.user.id
    },
  data:{
    auction_price:req.body.auction_price

  }  

})
res.status(200).json({
    status: 'success',
  });

}                       