import  express  from "express";
import { addAuction, GetallAuctions, deleteAuctions, GetNewAuctions, uploadImage, GetOneAuction } from '../controllers/auctions.controller'
import auth from "../middleware/auth";
import validate from "../middleware/validate";
import { createAuctionSchema } from "../schema.zod/aucations.zod";

let router = express.Router();

// read
router.get('/' ,GetallAuctions);

// read one auctions
router.get('/auction/:id' ,GetOneAuction);

router.get('/news' ,GetNewAuctions);

// create 
router.post('/', auth, validate(createAuctionSchema), addAuction)

// delete Many 
router.delete('/delete', deleteAuctions)

// read byid
// router.get('/:id',auth, GetAuctionByid);

// create 
// router.post('/auctionsimages',validate( createAuctionSchema),auth,createauctions)







export default router;