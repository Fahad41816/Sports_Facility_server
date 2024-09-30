"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("./User.controller");
const ValidationCheck_1 = __importDefault(require("../../MeddleWare/ValidationCheck"));
const User_validation_1 = require("./User.validation");
const router = express_1.default.Router();
router.post('/signup', (0, ValidationCheck_1.default)(User_validation_1.UserValidationWithZod), User_controller_1.UserController.CreateUser);
router.post('/login', (0, ValidationCheck_1.default)(User_validation_1.UserLoginValidationWithZod), User_controller_1.UserController.loginUser);
exports.UserRoute = router;
