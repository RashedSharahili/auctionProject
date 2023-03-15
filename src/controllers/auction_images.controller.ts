// import {Request, Response} from 'express';
// import {prisma} from '../config/db';


// export const AddImages = async (req: Request, res: Response) => {

//     try{ 
                
//             const {auctions_images}=req.body;

//             const AuctionImages=await prisma.auction.create({
//                 data:{
//                     auctions_images:{
//                         create:auctions_images.map((id)=>({id})),

//                     },

//                 },
//                 include:{
//                 auctions_images:true
//                 }

//             })
//     }
 
//     catch(e)
//     {

//     }

// }
