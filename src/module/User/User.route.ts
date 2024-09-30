import express from 'express'
import { UserController } from './User.controller'
import ValidationCheck from '../../MeddleWare/ValidationCheck'
import {
  UserLoginValidationWithZod,
  UserValidationWithZod,
} from './User.validation'

const router = express.Router()

router.post(
  '/signup',
  ValidationCheck(UserValidationWithZod),
  UserController.CreateUser,
)
router.post(
  '/login',
  ValidationCheck(UserLoginValidationWithZod),
  UserController.loginUser,
)

export const UserRoute = router
