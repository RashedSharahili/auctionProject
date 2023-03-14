import  express  from "express";
import {GetAuctionByid,GetallAuctions,createauctions } from '../controllers/auctions.controller'
import auth from "../middleware/auth";
import validate from "../middleware/validate";
import { createAuctionSchema } from "../zod.schema/auction.zod";

let router = express.Router();

// read
router.get('/' ,auth,GetallAuctions);

// read byid
router.get('/:id',auth, GetAuctionByid);

// create 
router.post('/auctionsimages',validate( createAuctionSchema),auth,createauctions)







export default router;