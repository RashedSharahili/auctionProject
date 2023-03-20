"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserAuctionSchema = void 0;
const zod_1 = require("zod");
exports.createUserAuctionSchema = zod_1.z.object({
    body: zod_1.z.object({
    // auction_price: z.number({
    //     required_error: "سعر المزاد مطلوب",
    //     invalid_type_error: "سعر المزاد يجب ان يكون رقم"
    // }),
    // accepted_privacy: z.boolean()
    })
});
