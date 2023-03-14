import  express  from "express";
import { addAuction, GetallAuctions, deleteAuctions } from '../controllers/auctions.controller'
import auth from "../middleware/auth";
import validate from "../middleware/validate";
import { createAuctionSchema } from "../schema.zod/aucations.zod";

let router = express.Router();

// read
router.get('/' ,auth,GetallAuctions);

// create 
router.post('/', auth, validate(createAuctionSchema), addAuction)

// delete Many 
router.delete('/delete', deleteAuctions)

// read byid
// router.get('/:id',auth, GetAuctionByid);

// create 
// router.post('/auctionsimages',validate( createAuctionSchema),auth,createauctions)







export default router;