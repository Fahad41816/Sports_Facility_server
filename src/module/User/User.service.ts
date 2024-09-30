import config from '../../app/config'
import { TUser } from './User.interface'
import { UserModel } from './User.model'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import AppError from '../../Error/AppError'

const createUserInToDb = async (UserData: TUser) => {
  const Result = await UserModel.create(UserData)

  return Result
}

const LoginUserInDb = async userData => {
  const IsUserExists = await UserModel.findOne({ email: userData.email })

  if (!IsUserExists) {
    throw new AppError(404, 'user not Exists')
  }

  const IsPasswordMatch = await bcrypt.compare(
    userData.password,
    IsUserExists.password,
  )

  if (!IsPasswordMatch) {
    throw new AppError(404, 'Password Do Not Match!')
  }

  const JwtPayload = {
    userId: IsUserExists._id,
    userPass: IsUserExists.password,
    role: IsUserExists.role,
  }

  const AccessToken = await jwt.sign(JwtPayload, config.JWTSecret as string, {
    expiresIn: '10d',
  })

  return {
    AccessToken: `Bearer ${AccessToken}`,
  }
}

export const UserService = {
  createUserInToDb,
  LoginUserInDb,
}
