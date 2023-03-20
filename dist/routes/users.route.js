"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const auth_1 = __importDefault(require("../middleware/auth"));
const validate_1 = __importDefault(require("../middleware/validate"));
const users_zod_1 = require("../schema.zod/users.zod");
let router = express_1.default.Router();
// read
router.get('/', users_controller_1.getAllUsers);
// create 
router.post('/signup', (0, validate_1.default)(users_zod_1.createUserSchema), users_controller_1.NewRegistration);
//log in
router.post('/login', (0, validate_1.default)(users_zod_1.loginUserSchema), users_controller_1.login);
// log out 
router.post('/logout', auth_1.default, users_controller_1.logOut);
exports.default = router;
