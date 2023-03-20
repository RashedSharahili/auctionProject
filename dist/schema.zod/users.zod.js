"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "البريد الالكتروني مطلوب!",
            invalid_type_error: "يجب ادخال بريد الكتروني صحيح!"
        }).email("يجب إدخال بريد الكتروني صحيح!"),
        password: zod_1.z.string({
            required_error: "كلمة المرور مطلوبة!"
        }).min(6, "يجب ان تحتوي كلمة المرور على ٦ خانات"),
        // phone_number:z.string({
        //     required_error:"رقم الجوال مطلوب",
        //     invalid_type_error:"يجب ان يكون رقم"
        // }),
        // birthDate:z.string({
        //     required_error:"تاريخ الميلاد مطلوب"
        // })
    })
});
exports.loginUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "البريد الالكتروني مطلوب!",
            invalid_type_error: "يجب ادخال بريد الكتروني صحيح!"
        }).email("يجب إدخال بريد الكتروني صحيح!"),
        password: zod_1.z.string({
            required_error: "كلمة المرور مطلوبة!"
        }).min(6, "يجب ان تحتوي كلمة المرور على ٦ خانات")
    })
});
