import {Request, Response} from 'express';
import {prisma} from '../config/db';


export const GetOneUserRegisterAuction = async (req: Request, res: Response) => {

    let { id } = req.params
  
    try {
      let Auctoins = await prisma.userRegisterAuction.findFirst({
        where: {
          auctionId: id,
          userId: res.locals.user.id
        }
      });
  
      res.json(Auctoins);
    } catch (err) {
      console.log(err);
      res.status(500).json(err)
    }
  };

export const addRegisterAuction=async (req:Request,res:Response)=>{

  const { id } = req.params

  try {

    let auctions =await prisma.userRegisterAuction.create({
 
      data:{
        accepted_privacy :req.body.accepted_privacy,
        auction_deposit: req.body.auction_deposit,
        auctionId:id,
        userId:res.locals.user.id
    
      }  
    
    })

    if(auctions) {

      res.status(200).json({ message: "تم التسجيل في المزاد", status: res.statusCode })
    }
  } catch(err) {

    res.status(500).json({ err, status: res.statusCode })
  }

}   

export const deleteRegisterAuctions = async(req:Request, res:Response) => {

    let auctions = await prisma.auction.deleteMany()
  
    if(auctions) {
  
      res.status(200).json({ message: "تم حذف التسجيل" })
    }
  }