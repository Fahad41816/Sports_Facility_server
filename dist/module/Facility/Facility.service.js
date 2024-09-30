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
exports.FacilityServices = void 0;
const Facility_model_1 = require("./Facility.model");
const CreateFacilityIntoDb = (FacilityData) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield Facility_model_1.FacilityModel.create(FacilityData);
    return Result;
});
const GetAllFacilityIntoDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield Facility_model_1.FacilityModel.find();
    return Result;
});
const UpdateFacilityIntoDb = (id, UpdateData) => __awaiter(void 0, void 0, void 0, function* () {
    const UpdateResult = yield Facility_model_1.FacilityModel.findByIdAndUpdate(id, UpdateData, {
        new: true,
    });
    return UpdateResult;
});
const DeleteFacilityIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const DeletedResult = yield Facility_model_1.FacilityModel.findByIdAndUpdate(id, {
        isDeleted: true,
    }, { new: true });
    return DeletedResult;
});
exports.FacilityServices = {
    GetAllFacilityIntoDb,
    CreateFacilityIntoDb,
    UpdateFacilityIntoDb,
    DeleteFacilityIntoDb,
};
