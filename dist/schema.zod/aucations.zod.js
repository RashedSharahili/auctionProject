"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuctionSchema = void 0;
const zod_1 = require("zod");
exports.createAuctionSchema = zod_1.z.object({
    body: zod_1.z.object({
    //     auction_type: z.string({
    //         required_error: "اختر نوع المزاد!",
    //         invalid_type_error: ""
    //     }),
    //     title: z.string({
    //         required_error: "اكتب عنوان المزاد",
    //         invalid_type_error: "يجب ان يكون حروف"
    //     }),
    //    started_date: z.string({
    //         required_error: "اختر يوم!",
    //         invalid_type_error: "يجب ان يكون صحيح"
    //     }),
    //     end_date: z.string({
    //         required_error: "اختر يوم !",
    //         invalid_type_error: "يجيب ان يكون صحيح"
    //     }),
    // auction_status: z.boolean({
    //     invalid_type_error: "اختر الحاله!"
    // }),
    // auction_price: z.number({
    //     required_error: "اختر سعر المزاد!",
    //     invalid_type_error: "يجب ان يكون ارقام"
    // }),
    // auction_min_price: z.number({
    //     required_error: "اختر حد ادنى!",
    //     invalid_type_error: "يجب ان يكون ارقام"
    // }),
    // auction_max_price: z.number({
    //     required_error: "اختر حد اعلى",
    //     invalid_type_error: "يجب ان يكون ارقام"
    // }),
    // is_online: z.boolean({
    //     invalid_type_error: "لا يمكن ان يكون المزاد عن بعد!"
    // }),
    })
});
