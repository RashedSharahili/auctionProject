import { TypeOf, z } from "zod";

export const createUserAuctionSchema = z.object({

    body: z.object({
        auction_price: z.number({
            required_error: "auction_price is required!",
            invalid_type_error: "auction_price must be number"
        }),
        accepted_privacy: z.boolean()
    })
});

export type CreateUserAuctionSchema = TypeOf<typeof createUserAuctionSchema>["body"];