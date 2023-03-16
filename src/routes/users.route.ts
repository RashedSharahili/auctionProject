import  express  from "express";
import {NewRegistration,login, getAllUsers} from '../controllers/users.controller'
import auth from "../middleware/auth";


let router = express.Router();
// read
router.get('/', getAllUsers);


// create 
router.post('/signup', NewRegistration)


//log in
router.post('/login',login)




export default router;