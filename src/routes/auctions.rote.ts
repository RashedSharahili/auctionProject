import  express  from "express";
import {GetallAuctions,addAuction } from '../controllers/auctions.controller'
import auth from "../middleware/auth";
import validate from "../middleware/validate";
import { createAuctionSchema } from "../schema.zod/aucations.zod";

let router = express.Router();

// read
router.get('/' ,auth,GetallAuctions);


// create 
router.post('/auctionsimages',validate( createAuctionSchema),auth,addAuction)







export default router;