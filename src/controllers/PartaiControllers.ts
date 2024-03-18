import { Request, Response } from "express";
import PartaiService from "../service/PartaiService";
import { PartaiValidator } from "../utils/validator/Partai";

class PartaiControllers {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
            
            const {error, value} = PartaiValidator.validate(data)
            if(error) return res.status(400).json({ message: error.details[0].message})

            const partai = await PartaiService.create(data);
            return res.status(201).json(data); 
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const partai = await PartaiService.find();
            return res.status(200).json({ data: partai });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id); 
            const updatedData = req.body; 

            
            const updatedUser = await PartaiService.update(id, updatedData);

            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async delete(req: Request, res: Response ): Promise<Response>{
        try {
           const id = parseInt(req.params.id);
    
           const deleteUser = await PartaiService.delete(id,);

           return res.status(200).json(deleteUser);
        } catch (error) {
            console.error(error);
            return res.status(400).json({message: "delete error bro"})
        }
    }
}

export default new PartaiControllers();
