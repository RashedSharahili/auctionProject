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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuctions = exports.GetNewAuctions = exports.GetOneAuction = exports.GetallAuctions = exports.addAuction = exports.uploadImage = void 0;
const db_1 = require("../config/db");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ dest: 'auctionsImages/' });
exports.uploadImage = upload.single("image");
// export const uploads = (req:Request, res:Response) => {
//   res.status(200).json({ message: "Image Uploaded" }) 
// }
const addAuction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const c_aucation = req.body;
    let uploaded;
    try {
        if (req.file) {
            uploaded = { message: "Image Uploaded" };
        }
        const auction = yield db_1.prisma.auction.create({
            data: {
                title: c_aucation.title,
                userId: res.locals.user.id,
                auction_type: c_aucation.auction_type,
                started_date: c_aucation.started_date,
                end_date: c_aucation.end_date,
                auction_status: true,
                auction_price: c_aucation.auction_price,
                auction_min_price: c_aucation.auction_min_price,
                auction_max_price: c_aucation.auction_max_price,
                auctionImage: c_aucation.auctionImage,
                is_online: c_aucation.is_online
            }
        });
        if (auction) {
            return res.status(200).json({
                message: "تم اضافه مزاد بنجاح",
                status: res.statusCode,
                uploaded: uploaded
            });
        }
        throw ("هناك مشكله حاول مره اخرى");
    }
    catch (err) {
        res.json(err);
    }
    console.log(res.locals.user.id);
    console.log('aucation', c_aucation);
    console.log("---------------------------------------------");
    // console.log('Auctions', Auctions)
});
exports.addAuction = addAuction;
const GetallAuctions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let Auctoins = yield db_1.prisma.auction.findMany({
            include: {
                userAuctions: true
            }
        });
        res.json(Auctoins);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.GetallAuctions = GetallAuctions;
const GetOneAuction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    try {
        let Auctoins = yield db_1.prisma.auction.findFirst({
            where: {
                id: id
            },
            include: {
                userAuctions: true
            }
        });
        res.json(Auctoins);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.GetOneAuction = GetOneAuction;
const GetNewAuctions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let Auctoins = yield db_1.prisma.auction.findMany({
            take: 3,
            orderBy: {
                created_at: 'desc'
            },
        });
        res.json(Auctoins);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.GetNewAuctions = GetNewAuctions;
const deleteAuctions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let auctions = yield db_1.prisma.auction.deleteMany();
    if (auctions) {
        res.status(200).json({ message: "تم حذف المزاد بنجاح" });
    }
});
exports.deleteAuctions = deleteAuctions;
