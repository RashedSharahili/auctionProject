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
exports.addAuction = exports.GetallUserAuctions = void 0;
const db_1 = require("../config/db");
const GetallUserAuctions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let Auctoins = yield db_1.prisma.userAuction.findMany({
            take: 1,
            orderBy: {
                auction_date: 'desc'
            }
        });
        res.json(Auctoins);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.GetallUserAuctions = GetallUserAuctions;
const addAuction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        let auctions = yield db_1.prisma.userAuction.create({
            data: {
                auction_price: req.body.auction_price,
                auctionId: id,
                userId: res.locals.user.id
            }
        });
        if (auctions) {
            res.status(200).json({ message: "!تمت المزايده بنجاح ", status: res.statusCode });
        }
    }
    catch (err) {
        res.status(500).json({ err, status: res.statusCode });
    }
});
exports.addAuction = addAuction;
