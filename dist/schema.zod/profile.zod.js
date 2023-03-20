"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileSchema = void 0;
const zod_1 = require("zod");
exports.updateProfileSchema = zod_1.z.object({
    body: zod_1.z.object({
    // name: z.string({
    //     required_error: "name is required",
    //     invalid_type_error: "name must be string"
    // }),
    // phone_number: z.string({
    //     required_error: "phone_number is required",
    //     invalid_type_error: "phone_number must be number"
    // }),
    })
});
