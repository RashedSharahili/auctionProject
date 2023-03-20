"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middleware/auth"));
const validate_1 = __importDefault(require("../middleware/validate"));
const profile_controller_1 = require("../controllers/profile.controller");
const profile_zod_1 = require("../schema.zod/profile.zod");
let router = express_1.default.Router();
// create
// router.post('/',validate(updateProfileSchema),auth,createProfile);
// update
router.put("/:id", auth_1.default, (0, validate_1.default)(profile_zod_1.updateProfileSchema), profile_controller_1.updateProfile);
router.get("/:id", auth_1.default, profile_controller_1.getProfile);
exports.default = router;
