"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityRoute = void 0;
const express_1 = __importDefault(require("express"));
const Facility_controller_1 = require("./Facility.controller");
const auth_1 = __importDefault(require("../../MeddleWare/auth"));
const ValidationCheck_1 = __importDefault(require("../../MeddleWare/ValidationCheck"));
const Facility_validation_1 = require("./Facility.validation");
const Router = express_1.default.Router();
Router.get('/', Facility_controller_1.FacilityController.GetAllFacility);
Router.post('/', (0, auth_1.default)('admin'), (0, ValidationCheck_1.default)(Facility_validation_1.FacilityValidate.FacilityValidationWithZod), Facility_controller_1.FacilityController.CreateFacility);
Router.put('/:id', (0, auth_1.default)('admin'), (0, ValidationCheck_1.default)(Facility_validation_1.FacilityValidate.UpdateFacilityValidationWithZod), Facility_controller_1.FacilityController.UpdaatefaclityData);
Router.delete('/:id', (0, auth_1.default)('admin'), Facility_controller_1.FacilityController.DeleteFacility);
exports.FacilityRoute = Router;
