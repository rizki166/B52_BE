//Service when logic when app communication database //

import { AppDataSource } from "../data-source"
import {  Partai } from "../entity/Partai"

export default new class PartaiService {
   async create(reqBody:any) : Promise<any> { 
   try{
      const repository = AppDataSource.getRepository(Partai)

      const partai = repository.create({
         image: reqBody.image,
         namePartai : reqBody.namePartai,
         KetuaUmum: reqBody.KetuaUmum,
         visiMisi: reqBody.visiMisi,
         Address: reqBody.Address,
         
      })

      await AppDataSource.createQueryBuilder().insert()
      .into(Partai).values(reqBody).execute()
       
 console.log(partai)
   }catch (error) {
throw error
   }
    }

    
    async find(): Promise<any> {
      try {
        const partai = await AppDataSource.getRepository(Partai).find(); 
  
        return partai;
      } catch (error) {
        throw error;
      }
    }

    async update(id: number, updatedData: any): Promise<any> {
      try {
          const repository = AppDataSource.getRepository(Partai);
  
          const userToUpdate = await repository.findOne({ where: { id: id } }) as Partai;
  
  
          if (!userToUpdate) {
              throw new Error("User not found");
          }
  
          repository.merge(userToUpdate, updatedData);
          const updatedUser = await repository.save(userToUpdate);
  
          return updatedUser;
      } catch (error) {
          throw error;
      }
  }

  async delete(id: number): Promise<any>{
    try{
      const repository = AppDataSource.getRepository(Partai);
    
      const userToDelete = await repository.findOne({ where: { id: id } }) as Partai;
  
      if (!userToDelete) {
        throw new Error("User not found");
      }
  
      await repository.remove(userToDelete);
  
      return { message: "User deleted successfully" };
    } catch (error){
      throw error;
    }
  }
}