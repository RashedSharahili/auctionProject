import {Request, Response} from 'express';
import {prisma} from '../config/db';


export const GetallUserAuctions = async (req: Request, res: Response) => {
  try {
    let Auctoins = await prisma.userAuction.findMany({
      take: 1,
      orderBy: {
        auction_date: 'desc'
      }
    });

    res.json(Auctoins);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
};

export const addAuction=async (req:Request,res:Response)=>{

  const { id } = req.params

  try {

    let auctions =await prisma.userAuction.create({
 
      data:{
        auction_price:req.body.auction_price,
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