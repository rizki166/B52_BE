import { AppDataSource } from "../data-source";
import { Article } from "../entity/Article";

export default new (class ArticleService {
  async create(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Article);

      const article = repository.create({
        title: reqBody.title,
        author: reqBody.author,
        image: reqBody.image,
        date: reqBody.visiMisi,
        content: reqBody.content,
      });

      await AppDataSource.createQueryBuilder()
        .insert()
        .into(Article)
        .values(reqBody)
        .execute();

      console.log(article);
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<any> {
    try {
      const article = await AppDataSource.getRepository(Article).find();

      return article;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: any): Promise<any> {
    try {
        const article = await AppDataSource.getRepository(Article)
            .createQueryBuilder('article')
            .leftJoinAndSelect('article.user', 'user')
            .where('article.id = :id', { id })
            .getOne()
        return article
    } catch (error) {
        throw error
    }
}

  async update(id: number, updatedData: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Article);

      const userToUpdate = await repository.findOne({ where: { id: id } }) as Article;

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
      const repository = AppDataSource.getRepository(Article);
    
      const userToDelete = await repository.findOne({ where: { id: id } }) as Article;

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
