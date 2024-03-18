import { Request, Response } from "express";
import ArticleService from "../service/ArticleService"; 
import { ArticleValidator } from "../utils/validator/Article";

class ArticleController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
          const data = req.body;
    
          const { error, value } = ArticleValidator.validate(data);
    
          if (error) {
            return res.status(400).json({ message: error.details[0].message });
          }
    
          const article = await ArticleService.create(data);
    
          return res
            .status(200)
            .json({ message: "Article created successfully.", article });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const newArticle = await ArticleService.find();
            return res.status(200).json({ data: newArticle });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async findOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const article = await ArticleService.findOne(id)

            return res.status(200).json(article)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id); 
            const updatedData = req.body; 

            
            const updatedUser = await ArticleService.update(id, updatedData);

            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async delete(req: Request, res: Response ): Promise<Response>{
        try {
           const id = parseInt(req.params.id);
    
           const deleteUser = await ArticleService.delete(id,);

           return res.status(200).json(deleteUser);
        } catch (error) {
            console.error(error);
            return res.status(400).json({message: "delete error bro"})
        }
    }
}

export default new ArticleController();
