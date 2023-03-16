import { Auction } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../config/db';




export const addAuction = async (req: Request, res: Response) => {

  const c_aucation = req.body as Auction

  try {

    const auction =  await prisma.auction.create({
      data: {
        title: c_aucation.title,
        userId: res.locals.user.id,
        auction_type: c_aucation.auction_type,
        started_date: c_aucation.started_date,
        end_date: c_aucation.end_date,
        auction_status: c_aucation.auction_status,
        is_accepted: c_aucation.is_accepted,
        auction_price: c_aucation.auction_price,
        auction_min_price: c_aucation.auction_min_price,
        auction_max_price: c_aucation.auction_max_price,
        is_online: c_aucation.is_online
      }
    })

    if(auction) {

      return res.status(200).json({
        message: "تم اضافه مزاد بنجاح",
        status: res.statusCode,
      });

    }

    throw("هناك مشكله حاول مره اخرى");


  } catch(err) {

    res.json(err)
  }

  console.log(res.locals.user.id);
  console.log('aucation', c_aucation)

  console.log("---------------------------------------------");

  // console.log('Auctions', Auctions)

}

export const GetallAuctions = async (req: Request, res: Response) => {
  try {
    let Auctoins = await prisma.auction.findMany({
      include: {
        userAuctions: true
      }
    });

    res.json({ "المزادادت": Auctoins });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
};



export const GetNewAuctions = async (req: Request, res: Response) => {
  try {
    let Auctoins = await prisma.auction.findMany({
    orderBy:{

      created_at : 'desc'
    },
    take:3,
      
    });

    res.json({ "المزادادت": Auctoins });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
};

export const deleteAuctions = async(req:Request, res:Response) => {

  let auctions = await prisma.auction.deleteMany()

  if(auctions) {

    res.status(200).json({ message: "تم حذف المزاد بنجاح" })
  }
}
