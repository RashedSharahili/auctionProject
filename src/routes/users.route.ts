import  express  from "express";
import {NewRegistration,login, getAllUsers, logOut} from '../controllers/users.controller'
import auth from "../middleware/auth";
import validate from "../middleware/validate";
import { createUserSchema, loginUserSchema } from "../schema.zod/users.zod";


let router = express.Router();
// read
router.get('/', getAllUsers);


// create 
router.post('/signup', validate(createUserSchema), NewRegistration)


//log in
router.post('/login', validate(loginUserSchema),login)

// log out 
router.post('/logout', auth, logOut)




export default router;