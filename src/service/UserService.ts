//Service when logic when app communication database //


import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Users } from "../entity/Users";

export default new (class UserService {
  async create(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Users);

      const partai = repository.create({
        nameUser: reqBody.nameUser,
        address: reqBody.address,
        gender: reqBody.gender,
        username: reqBody.username,
        password: reqBody.password,
      });

      await AppDataSource.createQueryBuilder()
        .insert()
        .into(Users)
        .values(reqBody)
        .execute();

      console.log(partai);
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<any> {
    try {
      const users = await AppDataSource.getRepository(Users).find();

      return users;
    } catch (error) {
      throw error;
    }
  }

  
  async update(id: number, updatedData: any): Promise<any> {
    try {
        const repository = AppDataSource.getRepository(Users);

        const userToUpdate = await repository.findOne({ where: { id: id } }) as Users;


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
    const repository = AppDataSource.getRepository(Users);
  
    const userToDelete = await repository.findOne({ where: { id: id } }) as Users;

    if (!userToDelete) {
      throw new Error("User not found");
    }

    await repository.remove(userToDelete);

    return { message: "User deleted successfully" };
  } catch (error){
    throw error;
  }
}

async login(username: string, password: string): Promise<any> {
  try {
    const repository = AppDataSource.getRepository(Users); 
    const userLogin = await repository.findOne({ where: { username, password } });

    return userLogin;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
})();
