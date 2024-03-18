import { Request, Response } from "express";
import PaslonService from "../service/PaslonService"; 
import { PaslonValidator } from "../utils/validator/Paslon";

class PaslonController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const {error, value} = PaslonValidator.validate(data)
            if(error) return res.status(400).json({ message: error.details[0].message})


            const Paslon = await PaslonService.create(data); 
            return res.status(201).json(data); 
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const paslon = await PaslonService.find();
            return res.status(200).json({ data: paslon });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id); 
            const updatedData = req.body; 

            
            const updatedUser = await PaslonService.update(id, updatedData);

            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async delete(req: Request, res: Response ): Promise<Response>{
        try {
           const id = parseInt(req.params.id);
    
           const deleteUser = await PaslonService.delete(id,);

           return res.status(200).json(deleteUser);
        } catch (error) {
            console.error(error);
            return res.status(400).json({message: "delete error bro"})
        }
    }
}

export default new PaslonController();
