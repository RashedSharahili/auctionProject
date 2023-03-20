"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRegisterAuction_1 = require("../controllers/userRegisterAuction");
const auth_1 = __importDefault(require("../middleware/auth"));
// import { createUserAuctionSchema } from "../schema.zod/userAuctions.zod";
let router = express_1.default.Router();
// get 
router.get('/:id', auth_1.default, userRegisterAuction_1.GetOneUserRegisterAuction);
// create
router.post('/:id', auth_1.default, userRegisterAuction_1.addRegisterAuction);
// delete
router.delete('/', userRegisterAuction_1.addRegisterAuction);
exports.default = router;
