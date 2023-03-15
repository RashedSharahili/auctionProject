import { TypeOf, z } from "zod";

export const createAuctionSchema = z.object({

    body: z.object({
        auction_type: z.string({
            required_error: "اختر نوع المزاد!",
            invalid_type_error: ""
        }),
        
        title: z.string({
            required_error: "اكتب عنوان المزاد",
            invalid_type_error: "يجب ان يكون حروف"
        }),

       started_date: z.string({
            required_error: "اختر يوم!",
            invalid_type_error: "يجب ان يكون صحيح"
        }),


        end_date: z.string({
            required_error: "اختر يوم !",
            invalid_type_error: "يجيب ان يكون صحيح"
        }),
        auction_status: z.boolean({
            invalid_type_error: "اختر الحاله!"
        }),

        auction_price: z.number({
            required_error: "اختر سعر المزاد!",
            invalid_type_error: "يجب ان يكون ارقام"
        }),
        auction_min_price: z.number({
            required_error: "اختر حد ادنى!",
            invalid_type_error: "يجب ان يكون ارقام"
        }),


        auction_max_price: z.number({
            required_error: "اختر حد اعلى",
            invalid_type_error: "يجب ان يكون ارقام"
        }),


        is_online: z.boolean({
            invalid_type_error: "لا يمكن ان يكون المزاد عن بعد!"
        }),
        

        
        
    })
});



export type createAuctionSchema = TypeOf<typeof createAuctionSchema>["body"];