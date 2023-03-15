import { TypeOf, z } from "zod";

export const createCategorySchema = z.object({

    body: z.object({
        name: z.string({
            required_error: "حقل التصنيف مطلوب",
            invalid_type_error: "التصنيف يجب أن يكون نص"
        }).min(2, "أقل أحرف للتصنيف ٢ حرف")
    })
});

export const updateCategorySchema = z.object({

    body: z.object({
        name: z.string({
            invalid_type_error: "حقل التصنيف مطلوب"
        }).min(2, "قل أحرف للتصنيف ٢ حرف")
    }),

    // params: z.object({

    //     id: z.string({

    //         required_error: "paramter id od task is required!",
    //         invalid_type_error: "id must be string"
    //     })
    // })
});

export type CreateCategorySchema = TypeOf<typeof createCategorySchema>["body"];
export type UpdateCategorySchema = TypeOf<typeof updateCategorySchema>["body"];
// export type UpdateCategorySchema2 = TypeOf<typeof updateCategorySchema>["params"];