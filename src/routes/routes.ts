import express from 'express'
import usersRoute from '../routes/users.route';
// import categoriesRoute from '../routes/categorise.route';
import auctionsRoute from '../routes/auctions.route';
import profileRoute from '../routes/profile.route';
import userAuctionsRoute from '../routes/userauctions.route';
import userRegisterAuctionsRoute from '../routes/userRegisterAuction';
let router = express.Router()


router.use('/users',usersRoute);
// router.use('/categories',categoriesRoute);
router.use('/auctions',auctionsRoute);
router.use('/profile',profileRoute);
router.use('/userAuctions', userAuctionsRoute);
router.use('/userRegisterAuctions', userRegisterAuctionsRoute);







export default router;