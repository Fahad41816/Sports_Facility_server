import CatchAsync from '../../utils/CatchAsync'
import { FacilityServices } from './Facility.service'

const GetAllFacility = CatchAsync(async (req, res) => {
  const AllFacility = await FacilityServices.GetAllFacilityIntoDb()

  if (AllFacility.length == 0) {
    res.status(404).json({
      success: true,
      statusCode: 404,
      message: 'No Data Found',
      data: AllFacility,
    })
  }

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Facilities retrieved successfully',
    data: AllFacility,
  })
})

const CreateFacility = CatchAsync(async (req, res) => {
  const FacilityData = req.body
  const FacilityResult =
    await FacilityServices.CreateFacilityIntoDb(FacilityData)

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Facility added successfully',
    data: FacilityResult,
  })
})

const UpdaatefaclityData = CatchAsync(async (req, res) => {
  const id = req.params.id
  const updateData = req.body

  const Result = await FacilityServices.UpdateFacilityIntoDb(id, updateData)

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Facility updated successfully',
    data: Result,
  })
})

const DeleteFacility = CatchAsync(async (req, res) => {
  const DeletedFacilityId = req.params.id

  const DeletedResult =
    await FacilityServices.DeleteFacilityIntoDb(DeletedFacilityId)

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Facility deleted successfully',
    data: DeletedResult,
  })
})

export const FacilityController = {
  CreateFacility,
  UpdaatefaclityData,
  DeleteFacility,
  GetAllFacility,
}
