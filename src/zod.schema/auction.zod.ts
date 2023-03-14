import { TypeOf, z } from "zod";

export const createAuctionSchema = z.object({

    body: z.object({
        auction_type: z.string({
            required_error: "auction_type is required",
            invalid_type_error: "auction_type must be number"
        }),
        
        title: z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be string"
        }),

       started_date: z.string({
            required_error: "started_date is requird!",
            invalid_type_error: "started_date must be dateTime"
        }),


        end_date: z.string({
            required_error: "end_date is requird!",
            invalid_type_error: "started_date must be dateTime"
        }),
        auction_status: z.string({
            required_error: "auction_status is requird!",
            invalid_type_error: "auction_status must be boolean"
        }),

        is_accepted: z.string({
            required_error: "is_accepted is requird!",
            invalid_type_error: "is_accepted must be string"
        }),

        userId: z.string({
            required_error: "userId is requird!",
            invalid_type_error: "userId must be string"
        }),

        auction_price: z.string({
            required_error: "auction_price is requird!",
            invalid_type_error: "auction_price must be int"
        }),
        auction_min_price: z.string({
            required_error: "auction_min_price is requird!",
            invalid_type_error: "auction_min_price must be int"
        }).min(10000,"اقل مبلغ للمزيدة هو عشرة الاف"),


        auction_max_price: z.string({
            required_error: "auction_max_price is requird!",
            invalid_type_error: "auction_max_price must be int"
        }),


        is_online: z.string({
            required_error: "is_online is requird!",
            invalid_type_error: "is_online must be boolean"
        }),
        

        
        
    })
});



export type createAuctionSchema = TypeOf<typeof createAuctionSchema>["body"];