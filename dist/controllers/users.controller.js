"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.login = exports.NewRegistration = exports.getAllUsers = void 0;
const db_1 = require("../config/db");
const argon2 = __importStar(require("argon2"));
const jwt = __importStar(require("jsonwebtoken"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield db_1.prisma.user.findMany({
        include: {
            profile: true
        }
    });
    res.status(200).json({ users, status: res.statusCode });
});
exports.getAllUsers = getAllUsers;
////////////////////////////////////////////////////////////////////
const NewRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = yield argon2.hash(req.body.password);
    try {
        const user = yield db_1.prisma.user.create({
            data: {
                id: res.locals.id,
                email: req.body.email,
                password: hash
            }
        });
        if (user) {
            const profile = yield db_1.prisma.profile.create({
                data: {
                    userId: user.id,
                    name: req.body.name,
                    phone_number: req.body.phone_number,
                    gender: req.body.gender,
                    birthDate: req.body.birthDate
                }
            });
            if (profile) {
                res.status(200).json({ message: "تم أضافة مستخدم" });
            }
        }
        throw ("يوجد خطأ ما، حاول مره أخرى");
    }
    catch (e) {
        res.status(500).json({ message: `Error: ${e}` });
    }
});
exports.NewRegistration = NewRegistration;
/////////////////////////////////////////////////////////////
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        let l_user = req.body;
        let user = yield db_1.prisma.user.findFirst({
            where: {
                email: l_user.email
            },
            include: {
                profile: true
            }
        });
        if (user) {
            if (yield argon2.verify(user.password, l_user.password)) {
                console.log(user);
                let enToken = jwt.sign({ id: user.id, email: user.email, name: (_a = user.profile) === null || _a === void 0 ? void 0 : _a.name, profileId: (_b = user.profile) === null || _b === void 0 ? void 0 : _b.id }, process.env.API_SECRET, { expiresIn: "1 days" });
                // console.log(enToken);
                return res.status(200).json({ message: `مرحبا بعودتك ${(_c = user.profile) === null || _c === void 0 ? void 0 : _c.name}`, token: enToken });
            }
            else {
                return res.status(401).json({ message: "اسم المستخدم أو كلمة المرور غير صحيحة" });
            }
        }
        else {
            return res.status(401).json({ message: "اسم المستخدم أو كلمة المرور غير صحيحة" });
        }
        throw ("هناك خطأ ما ، حاول مرة أخرى!");
    }
    catch (err) {
        res.json(err);
    }
});
exports.login = login;
const logOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield db_1.prisma.user.findFirst({
            where: {
                id: res.locals.user.id
            }
        });
        if (user) {
            res.status(200).json({ message: "تم تسجيل الخروج بنجاح", status: res.statusCode });
        }
        else {
            res.status(401).json({ message: "يرجى اعادة تسجيل الدخول" });
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
exports.logOut = logOut;
