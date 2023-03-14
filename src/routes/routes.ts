import express from 'express'
import usersRoute from '../routes/users.route';
import categoriesRoute from '../routes/categorise.route';
let router = express.Router()


router.use('/users',usersRoute);
router.use('/categories',categoriesRoute);





export default router;