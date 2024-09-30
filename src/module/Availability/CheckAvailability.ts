/* eslint-disable @typescript-eslint/no-explicit-any */
import CatchAsync from '../../utils/CatchAsync'
import { BookingModel } from '../Booking/Booking.model'
import moment from 'moment'

const getAvailableSlots = (bookings: any, totalSlots: any) => {
  const availableSlots: { startTime: string; endTime: string }[] = []

  totalSlots.forEach(slot => {
    let isAvailable = true

    bookings.forEach(booking => {
      const bookingStart = moment(booking.startTime, 'HH:mm')
      const bookingEnd = moment(booking.endTime, 'HH:mm')
      const slotStart = moment(slot.startTime, 'HH:mm')
      const slotEnd = moment(slot.endTime, 'HH:mm')

      if (
        slotStart.isBetween(bookingStart, bookingEnd, undefined, '[)') ||
        slotEnd.isBetween(bookingStart, bookingEnd, undefined, '(]') ||
        (slotStart.isSameOrBefore(bookingStart) &&
          slotEnd.isSameOrAfter(bookingEnd))
      ) {
        isAvailable = false
      }
    })

    if (isAvailable) {
      availableSlots.push(slot)
    }
  })

  return availableSlots
}

const CheckAvailability = CatchAsync(async (req, res) => {
  const dateQuery = req.query.date
  const dateObj = new Date()
  const month = dateObj.getUTCMonth() + 1 // months from 1-12
  const day = dateObj.getUTCDate()
  const year = dateObj.getUTCFullYear()

  const date = dateQuery ? dateQuery : `${year}-${month}-${day}`

  const DateBookingSlot = await BookingModel.find({ date })

  const totalSlots = [
    { startTime: '00:00', endTime: '02:00' },
    { startTime: '03:00', endTime: '06:00' },
    { startTime: '06:00', endTime: '09:00' },
    { startTime: '09:00', endTime: '12:00' },
    { startTime: '12:00', endTime: '15:00' },
    { startTime: '15:00', endTime: '18:00' },
    { startTime: '18:00', endTime: '21:00' },
    { startTime: '21:00', endTime: '24:00' },
  ]

  const availableSlots = getAvailableSlots(DateBookingSlot, totalSlots)

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Availability checked successfully',
    data: availableSlots,
  })
})

export default CheckAvailability
