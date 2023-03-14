import {Request, Response} from 'express';
import {prisma} from '../config/db';




export const addAuction=async (req:Request,res:Response)=>{

let Auctions=await prisma.auctions.create({

  data:{
    userId:res.locals.id,
    title:req.body.title,
    started_date:req.body.started_date,
    end_date:req.body.end_date,
    is_accepted:req.body.is_accepted,
    auction_type:req.body.auction_type,
    auction_price:req.body.auction_price,
    auction_min_price:req.body.auction_min_price,
    auction_max_price:req.body.auction_max_price,
    is_online:req.body.is_online,
    created_at:req.body.created_at,
    auction_status:req.body.auction_status

  }  

})
res.status(200).json({
    status: 'success',
  });

}

export const GetallAuctions= async (req: Request, res: Response) => {
  try {
    let Auctoins = await prisma.auctions.findMany();

    res.json({ "Auctoins": Auctoins });
  } catch (err) {
    console.log(err);
  }
};
