import express from 'express'
import { FacilityController } from './Facility.controller'
import auth from '../../MeddleWare/auth'
import ValidationCheck from '../../MeddleWare/ValidationCheck'
import { FacilityValidate } from './Facility.validation'

const Router = express.Router()

Router.get('/', FacilityController.GetAllFacility)
Router.post('/', auth('admin'), ValidationCheck(FacilityValidate.FacilityValidationWithZod) , FacilityController.CreateFacility)
Router.put('/:id', auth('admin'), ValidationCheck(FacilityValidate.UpdateFacilityValidationWithZod) , FacilityController.UpdaatefaclityData)
Router.delete('/:id', auth('admin'), FacilityController.DeleteFacility)

export const FacilityRoute = Router
