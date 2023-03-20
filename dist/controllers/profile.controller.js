"use strict";
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
exports.getProfile = exports.updateProfile = void 0;
const db_1 = require("../config/db");
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let u_profile = req.body;
        let { id } = req.params;
        let profile = yield db_1.prisma.profile.updateMany({
            where: {
                id: id,
                userId: res.locals.user.id
            },
            data: {
                name: u_profile.name,
                phone_number: u_profile.phone_number,
                gender: u_profile.gender
            }
        });
        if (profile.count == 0) {
            res.status(404).json({ message: "لم يتم تحديث الملف الشخصي " });
        }
        else {
            return res.status(200).json({ message: "تم تحديث الملف الشخصي بنجاح" });
        }
        throw ("يوجد خطأ , حاول مره اخرى ");
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.updateProfile = updateProfile;
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let getprofile = req.body;
        let { id } = req.params;
        let profile = yield db_1.prisma.profile.findFirst({
            where: {
                id: id,
                userId: res.locals.user.id
            },
            include: {
                user: true
            }
        });
        if (profile) {
            res.status(200).json(profile);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.getProfile = getProfile;
