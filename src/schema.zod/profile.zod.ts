import { TypeOf, z } from "zod";

export const updateProfileSchema = z.object({

    body: z.object({
        name: z.string({
            required_error: "name is required",
            invalid_type_error: "name must be string"
        }),

        phone_numper: z.string({
            required_error: "phone_numper is required",
            invalid_type_error: "phone_numper must be number"
        }),
        
    })
});



export type updateProfileSchema = TypeOf<typeof updateProfileSchema>["body"];

