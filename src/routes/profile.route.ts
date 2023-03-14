import  express  from "express";
import auth from "../middleware/auth";
import validate from "../middleware/validate";
import { updateProfile } from "../controllers/profile.controller";
import { updateProfileSchema } from "../zod.schema/profile.zod";

let router = express.Router();

// create 
// router.post('/',validate(updateProfileSchema),auth,createProfile);


// update
router.put('/:name',validate(updateProfileSchema),updateProfile)







export default router;