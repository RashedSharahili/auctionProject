import { TypeOf, z } from "zod";

export const createUserAuctionSchema = z.object({

    body: z.object({
        auction_price: z.number({
            required_error: "سعر المزاد مطلوب",
            invalid_type_error: "سعر المزاد يجب ان يكون رقم"
        }),
        accepted_privacy: z.boolean()
    })
});

export type CreateUserAuctionSchema = TypeOf<typeof createUserAuctionSchema>["body"];