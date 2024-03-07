//Service when logic when app communication database //

import { AppDataSource } from "../data-source"
import {  Users } from "../entity/Users"

export default new class UserService {
   async create(reqBody:any) : Promise<any> { 
   try{
      const repository = AppDataSource.getRepository(Users)

      const user = repository.create({
         nameUser: reqBody.nameUser,
         address : reqBody.address,
         dateOfBirth: reqBody.dateOfBirth,
         gender: reqBody.gender,
         username: reqBody.username,
         password: reqBody.password
      })
 
      

      await AppDataSource.createQueryBuilder().insert().into(Users).values(reqBody).execute()
       
 console.log(user)
   }catch (error) {
throw error
   }
    }
}