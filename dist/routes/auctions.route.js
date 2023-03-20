"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auctions_controller_1 = require("../controllers/auctions.controller");
const auth_1 = __importDefault(require("../middleware/auth"));
const validate_1 = __importDefault(require("../middleware/validate"));
const aucations_zod_1 = require("../schema.zod/aucations.zod");
let router = express_1.default.Router();
// read
router.get('/', auctions_controller_1.GetallAuctions);
// read one auctions
router.get('/auction/:id', auctions_controller_1.GetOneAuction);
router.get('/news', auctions_controller_1.GetNewAuctions);
// create 
router.post('/', auth_1.default, (0, validate_1.default)(aucations_zod_1.createAuctionSchema), auctions_controller_1.addAuction);
// delete Many 
router.delete('/delete', auctions_controller_1.deleteAuctions);
// read byid
// router.get('/:id',auth, GetAuctionByid);
// create 
// router.post('/auctionsimages',validate( createAuctionSchema),auth,createauctions)
exports.default = router;
