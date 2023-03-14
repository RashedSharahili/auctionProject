import  express  from "express";
import auth from "../middleware/auth";
import validate from "../middleware/vildate";
import { createProfile, updateProfile } from "../controllear/profile.controllear";
import { auctions } from "../controllear/auctions.controllear";
import { createAuctionSchema } from "../zod.schema/auction.zod";
import { updateProfileSchema } from "../zod.schema/profile.zod";
// import { auctionsSchema } from "../zod.schema/auction.zod";

let router = express.Router();

// create 
router.post('/',validate(createAuctionSchema),auth,createProfile);


// update
router.put('/:name',validate(updateProfileSchema),updateProfile);







export default router;