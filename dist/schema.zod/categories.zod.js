"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategorySchema = exports.createCategorySchema = void 0;
const zod_1 = require("zod");
exports.createCategorySchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "حقل التصنيف مطلوب",
            invalid_type_error: "التصنيف يجب أن يكون نص"
        }).min(2, "أقل أحرف للتصنيف ٢ حرف")
    })
});
exports.updateCategorySchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
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
// export type UpdateCategorySchema2 = TypeOf<typeof updateCategorySchema>["params"];
