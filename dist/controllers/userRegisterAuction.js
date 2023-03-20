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
exports.deleteRegisterAuctions = exports.addRegisterAuction = exports.GetOneUserRegisterAuction = void 0;
const db_1 = require("../config/db");
const GetOneUserRegisterAuction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    try {
        let Auctoins = yield db_1.prisma.userRegisterAuction.findFirst({
            where: {
                auctionId: id,
                userId: res.locals.user.id
            }
        });
        res.json(Auctoins);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.GetOneUserRegisterAuction = GetOneUserRegisterAuction;
const addRegisterAuction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        let auctions = yield db_1.prisma.userRegisterAuction.create({
            data: {
                accepted_privacy: req.body.accepted_privacy,
                auction_deposit: req.body.auction_deposit,
                auctionId: id,
                userId: res.locals.user.id
            }
        });
        if (auctions) {
            res.status(200).json({ message: "تم التسجيل في المزاد", status: res.statusCode });
        }
    }
    catch (err) {
        res.status(500).json({ err, status: res.statusCode });
    }
});
exports.addRegisterAuction = addRegisterAuction;
const deleteRegisterAuctions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let auctions = yield db_1.prisma.auction.deleteMany();
    if (auctions) {
        res.status(200).json({ message: "تم حذف التسجيل" });
    }
});
exports.deleteRegisterAuctions = deleteRegisterAuctions;
