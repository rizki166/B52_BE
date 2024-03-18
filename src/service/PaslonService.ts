//Service when logic when app communication database //

import { AppDataSource } from "../data-source";
import { Paslon } from "../entity/Paslon";

export default new (class PaslonService {
  async create(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Paslon);

      const paslon = repository.create({
        image: reqBody.image,
        nomerUrut: reqBody.nomerUrut,
        name: reqBody.name,
        visiMisi: reqBody.visiMisi,
        Koaslisi: reqBody.Koaslisi,
      });

      await AppDataSource.createQueryBuilder()
        .insert()
        .into(Paslon)
        .values(reqBody)
        .execute();

      console.log(paslon);
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<any> {
    try {
      const paslon = await AppDataSource.getRepository(Paslon).find();

      return paslon;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updatedData: any): Promise<any> {
    try {
        const repository = AppDataSource.getRepository(Paslon);

        const userToUpdate = await repository.findOne({ where: { id: id } }) as Paslon;


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
    const repository = AppDataSource.getRepository(Paslon);
  
    const userToDelete = await repository.findOne({ where: { id: id } }) as Paslon;

    if (!userToDelete) {
      throw new Error("User not found");
    }

    await repository.remove(userToDelete);

    return { message: "User deleted successfully" };
  } catch (error){
    throw error;
  }
}
})();
