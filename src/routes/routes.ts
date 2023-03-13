import express from 'express'
import usersRoute from '../routes/users.route';
let router = express.Router()


router.use('/users',usersRoute);





export default router;