import express from 'express'
import usersRoute from '../routes/users.route';
import auctionsRoute from '../routes/auctions.rote';
import profileRoute from '../routes/profile.route';
let router = express.Router()


router.use('/users',usersRoute);
router.use('/auctions',auctionsRoute);
router.use('/auctions',profileRoute);





export default router;