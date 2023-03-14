

import {Request, Response} from 'express';
import {prisma} from '../config/db';



export const addAuction=async (req:Request,res:Response)=>{

let Auctions=await prisma.userAuction.create({
 
  data:{
    auction_price:req.body.auction_price,
    auction_deposit :req.body.auction_deposit, 
    accepted_privacy :req.body.accepted_privacy,
    auctionId:res.locals.id,
    userId:res.locals.id

  }  

})
res.status(200).json({
    status: 'success',
  });

}                       