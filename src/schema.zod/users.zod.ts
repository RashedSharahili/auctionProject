import { TypeOf, z } from "zod";

export const createUserSchema = z.object({
    
    body: z.object({
        email: z.string({
            required_error: "البريد الالكتروني مطلوب!",
            invalid_type_error: "يجب ادخال بريد الكتروني صحيح!"
            
        }).email("يجب إدخال بريد الكتروني صحيح!"),

        password: z.string({
            required_error: "كلمة المرور مطلوبة!"
        }).min(6, "يجب ان تحتوي كلمة المرور على ٦ خانات"),

        phone_number:z.number({
            required_error:"رقم الجوال مطلوب",
            invalid_type_error:"يجب ان يكون رقم"
        }),
        birthDate:z.string({
            required_error:"تاريح الميلاد مطلوب"
           
        })

    })
});

export const loginUserSchema = z.object({

    body: z.object({

        email: z.string({
            required_error: "البريد الالكتروني مطلوب!",
            invalid_type_error: "يجب ادخال بريد الكتروني صحيح!"
            
        }).email("يجب إدخال بريد الكتروني صحيح!"),

        password: z.string({
            required_error: "كلمة المرور مطلوبة!"
        }).min(6, "يجب ان تحتوي كلمة المرور على ٦ خانات")
    })
});

export type CreateUserSchema = TypeOf<typeof createUserSchema>["body"];
export type LoginUserSchema = TypeOf<typeof loginUserSchema>["body"];