import {Request, Response} from 'express';
import {prisma} from '../config/db';



//GetallAuctions

export const GetallAuctions = async (req: Request, res: Response) => {
    const getAuctions = await prisma.auctions.findMany();
    res.json(getAuctions);
  };

  ////////////////////



  // GetAuctionByid


  export async function GetAuctionByid(req: Request, res: Response) {
    let id = req.params
        try{
        let auctions = await prisma.auctions.findMany({
    
            
            where:id
               
      
        });
        res.json({ "":id})}
            catch(e){res.json({msg: e})}
        
        
        }

        ///////////



        //Add Auctoins
        
        export const createauctions = async (req:Request, res:Response) => {

            try {
        
                const auctions = req.body 
        
                await prisma.auctions.create({
                    data:auctions,

            
                });
                
        
                res.json({ message: "auctionsimages successfully" });
        
            } catch(err) {
        
                res.json(err);
            }
        
        }
        
        

       





import {Request, Response} from 'express';
import { prisma } from "../config/db";



export const addAuction=async (req:Request,res:Response)=>{

    let Auctions=await prisma.auctions.create({
    
      data:{
        userId:res.locals.id,
        title:req.body.title,
        started_date:req.body.started_date,
        end_date:req.body.end_date,
        auction_type:req.body.auction_type,
        auction_price:req.body.auction_price,
        auction_min_price:req.body.auction_min_price,
        auction_max_price:req.body.auction_max_price,
        is_online:req.body.is_online,
        auction_image:req.body.auction_image
    
      }
    
    })
    res.status(200).json({
        status: 'success',
      });
    
    }