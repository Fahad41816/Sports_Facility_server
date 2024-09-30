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
exports.FacilityController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const Facility_service_1 = require("./Facility.service");
const GetAllFacility = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AllFacility = yield Facility_service_1.FacilityServices.GetAllFacilityIntoDb();
    if (AllFacility.length == 0) {
        res.status(404).json({
            success: true,
            statusCode: 404,
            message: 'No Data Found',
            data: AllFacility,
        });
    }
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Facilities retrieved successfully',
        data: AllFacility,
    });
}));
const CreateFacility = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const FacilityData = req.body;
    const FacilityResult = yield Facility_service_1.FacilityServices.CreateFacilityIntoDb(FacilityData);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Facility added successfully',
        data: FacilityResult,
    });
}));
const UpdaatefaclityData = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateData = req.body;
    const Result = yield Facility_service_1.FacilityServices.UpdateFacilityIntoDb(id, updateData);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Facility updated successfully',
        data: Result,
    });
}));
const DeleteFacility = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const DeletedFacilityId = req.params.id;
    const DeletedResult = yield Facility_service_1.FacilityServices.DeleteFacilityIntoDb(DeletedFacilityId);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Facility deleted successfully',
        data: DeletedResult,
    });
}));
exports.FacilityController = {
    CreateFacility,
    UpdaatefaclityData,
    DeleteFacility,
    GetAllFacility,
};
