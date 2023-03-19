import  express  from "express";
import { addRegisterAuction, GetOneUserRegisterAuction } from '../controllers/userRegisterAuction'
import auth from "../middleware/auth";
import validate from "../middleware/validate";
// import { createUserAuctionSchema } from "../schema.zod/userAuctions.zod";

let router = express.Router();

// get 
router.get('/:id', auth, GetOneUserRegisterAuction)

// create
router.post('/:id', auth,addRegisterAuction)

// delete
router.delete('/',addRegisterAuction)

export default router;