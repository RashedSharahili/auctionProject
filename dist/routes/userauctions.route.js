"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userauctions_controller_1 = require("../controllers/userauctions.controller");
const auth_1 = __importDefault(require("../middleware/auth"));
const validate_1 = __importDefault(require("../middleware/validate"));
const userAuctions_zod_1 = require("../schema.zod/userAuctions.zod");
let router = express_1.default.Router();
router.get('/', userauctions_controller_1.GetallUserAuctions);
// create
router.post('/:id', auth_1.default, (0, validate_1.default)(userAuctions_zod_1.createUserAuctionSchema), userauctions_controller_1.addAuction);
exports.default = router;
