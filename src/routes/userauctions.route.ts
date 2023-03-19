import  express  from "express";
import { addAuction, GetallUserAuctions } from '../controllers/userauctions.controller'
import auth from "../middleware/auth";
import validate from "../middleware/validate";
import { createUserAuctionSchema } from "../schema.zod/userAuctions.zod";

let router = express.Router();

router.get('/', GetallUserAuctions)

// create
router.post('/:id', auth, validate(createUserAuctionSchema),addAuction)

export default router;