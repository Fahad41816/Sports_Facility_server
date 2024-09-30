import { TFacility } from './Facility.interface'
import { FacilityModel } from './Facility.model'

const CreateFacilityIntoDb = async (FacilityData: TFacility) => {
  const Result = await FacilityModel.create(FacilityData)

  return Result
}

const GetAllFacilityIntoDb = async () => {
  const Result = await FacilityModel.find()

  return Result
}

const UpdateFacilityIntoDb = async (
  id: string,
  UpdateData: Record<string, unknown>,
) => {
  const UpdateResult = await FacilityModel.findByIdAndUpdate(id, UpdateData, {
    new: true,
  })

  return UpdateResult
}

const DeleteFacilityIntoDb = async (id: string) => {
  const DeletedResult = await FacilityModel.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    { new: true },
  )

  return DeletedResult
}

export const FacilityServices = {
  GetAllFacilityIntoDb,
  CreateFacilityIntoDb,
  UpdateFacilityIntoDb,
  DeleteFacilityIntoDb,
}
