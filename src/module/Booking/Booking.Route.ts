import express from 'express'
import { BookingController } from './Booking.controller'
import auth from '../../MeddleWare/auth'
import { BookingValidate } from './Booking.Validation'
import ValidationCheck from '../../MeddleWare/ValidationCheck'

const router = express.Router()

router.get('/', auth('admin'), BookingController.GettAllBookings)
router.get('/user', auth('user'), BookingController.GetbookingByUserid)
router.post('/', auth('user'), ValidationCheck(BookingValidate.BookingValidationWithZod), BookingController.CreateBookings)
router.delete('/:id', auth('user'), BookingController.CancleBooking)

export const BookingRouter = router
