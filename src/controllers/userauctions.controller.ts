

import {Request, Response} from 'express';
import {prisma} from '../config/db';



export const addAuction=async (req:Request,res:Response)=>{

  const { id } = req.params

  try {

    let auctions =await prisma.userAuction.create({
 
      data:{
        auction_price:req.body.auction_price,
        auction_deposit :req.body.auction_deposit, 
        accepted_privacy :req.body.accepted_privacy,
        auctionId:id,
        userId:res.locals.user.id
    
      }  
    
    })

    if(auctions) {

      res.status(200).json({ message: "!تمت المزايده بنجاح ", status: res.statusCode })
    }
  } catch(err) {

    res.status(500).json({ err, status: res.statusCode })
  }

}                       