import { Auction } from "@prisma/client";
import { Request, Response } from "express";
import expressFileUpload from "express-fileupload";
import { prisma } from "../config/db";

export const addAuction = async (req: Request, res: Response) => {
  const c_aucation = req.body as Auction;

  // let isUploaded = ""

  try {
    // let sampleFile;
    // let uploadPath;

    // if(!req.files || Object.keys(req.files).length === 0) {

    //   isUploaded = "No files were uploaded.";

    // } else {

    //   sampleFile = req.files.file;
    //   // uploadPath = '../auctionsImages/' + sampleFile.name;

    // }
    console.log("auction1");

    const auction = await prisma.auction.create({
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
        auctionImage: c_aucation.auctionImage,
        is_online: c_aucation.is_online,
      },
    });
    console.log("auction");
    if (auction) {
      return res.status(200).json({
        message: "تم اضافه مزاد بنجاح",
        // status: res.statusCode,
        // isUploaded: isUploaded
      });
    }

    throw "هناك مشكله حاول مره اخرى";
  } catch (err) {
    res.json(err);
  }

  console.log(res.locals.user.id);
  console.log("aucation", c_aucation);

  console.log("---------------------------------------------");

  // console.log('Auctions', Auctions)
};

export const GetallAuctions = async (req: Request, res: Response) => {
  try {
    let Auctoins = await prisma.auction.findMany({
      include: {
        userAuctions: true,
      },
    });

    res.json(Auctoins);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const GetNewAuctions = async (req: Request, res: Response) => {
  try {
    let Auctoins = await prisma.auction.findMany({
      take: 3,
      orderBy: {
        created_at: "desc",
      },
    });

    res.json(Auctoins);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const deleteAuctions = async (req: Request, res: Response) => {
  let auctions = await prisma.auction.deleteMany();

  if (auctions) {
    res.status(200).json({ message: "تم حذف المزاد بنجاح" });
  }
};
