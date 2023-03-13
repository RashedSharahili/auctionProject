import  express  from "express";
import {NewRegistration,login} from '../controllear/users.controllear'
import auth from "../middleware/auth";


let router = express.Router();
// read
// router.get('/', getAllUsers);


// create 
router.post('/', NewRegistration)


//log in
router.post('/login',login)




export default router;