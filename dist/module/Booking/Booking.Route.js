"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRouter = void 0;
const express_1 = __importDefault(require("express"));
const Booking_controller_1 = require("./Booking.controller");
const auth_1 = __importDefault(require("../../MeddleWare/auth"));
const Booking_Validation_1 = require("./Booking.Validation");
const ValidationCheck_1 = __importDefault(require("../../MeddleWare/ValidationCheck"));
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)('admin'), Booking_controller_1.BookingController.GettAllBookings);
router.get('/user', (0, auth_1.default)('user'), Booking_controller_1.BookingController.GetbookingByUserid);
router.post('/', (0, auth_1.default)('user'), (0, ValidationCheck_1.default)(Booking_Validation_1.BookingValidate.BookingValidationWithZod), Booking_controller_1.BookingController.CreateBookings);
router.delete('/:id', (0, auth_1.default)('user'), Booking_controller_1.BookingController.CancleBooking);
exports.BookingRouter = router;
