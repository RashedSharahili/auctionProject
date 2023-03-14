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
        
        

       




