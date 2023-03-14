import  express  from "express";
import {GetAuctionByid,GetallAuctions,auctions } from '../controllear/auctions.controllear'
import auth from "../middleware/auth";
import validate from "../middleware/vildate";
import { createAuctionSchema } from "../zod.schema/auction.zod";
// import { auctionsSchema } from "../zod.schema/auction.zod";

let router = express.Router();

// read
router.get('/' ,auth,GetallAuctions);

// read byid
router.get('/:id',auth, GetAuctionByid);

// create 
router.post('/auctionsimages',validate( createAuctionSchema),auth,auctions)







export default router;