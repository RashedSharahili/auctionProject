import { TypeOf, z } from "zod";

export const createCategorySchema = z.object({

    body: z.object({
        name: z.string({
            required_error: "name is required!",
            invalid_type_error: "category must be string"
        }).min(2, "category must be at least 2 characters")
    })
});

export const updateCategorySchema = z.object({

    body: z.object({
        name: z.string({
            invalid_type_error: "category must be string"
        }).min(2, "category must be at least 2 characters")
    }),

    params: z.object({

        id: z.string({

            required_error: "paramter id od task is required!",
            invalid_type_error: "id must be string"
        })
    })
});

export type CreateCategorySchema = TypeOf<typeof createCategorySchema>["body"];
export type UpdateCategorySchema = TypeOf<typeof updateCategorySchema>["body"];
export type UpdateCategorySchema2 = TypeOf<typeof updateCategorySchema>["params"];