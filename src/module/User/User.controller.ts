/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express'
import { UserService } from './User.service'
import CatchAsync from '../../utils/CatchAsync'

// create user in db proccess
const CreateUser: RequestHandler = CatchAsync(
  async (req: Request, res: Response) => {
    const UserData = req.body

    const UserResult = await UserService.createUserInToDb(UserData)

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User registered successfully',
      data: UserResult,
    })
  },
)

const loginUser = CatchAsync(async (req, res) => {
  const Userinfo : any = req.body

   
  const UserData : any = await UserService.LoginUserInDb(Userinfo)

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User logged in successfully",
    token: UserData.AccessToken,
    data:  UserData.data
  })

})

export const UserController = {
  CreateUser,
  loginUser,
}
