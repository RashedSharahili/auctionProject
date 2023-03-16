import express from "express";
import auth from "../middleware/auth";
import validate from "../middleware/validate";
import { getProfile, updateProfile } from "../controllers/profile.controller";
import { updateProfileSchema } from "../schema.zod/profile.zod";

let router = express.Router();

// create
// router.post('/',validate(updateProfileSchema),auth,createProfile);

// update
router.put("/:id", auth, validate(updateProfileSchema), updateProfile);

router.get("/:id", auth, getProfile);

export default router;
