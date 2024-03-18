import { Request, Response } from "express";
import UserService from "../service/UserService";
import { createUserSchema, loginSchema } from '../utils/validator/Users';


class UserControllers {
 
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const { error, value } = createUserSchema.validate(data);
            if (error) return res.status(400).json({ message: error.details[0].message });

            const user = await UserService.create(data);
            return res.status(201).json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const users = await UserService.find();
            return res.status(200).json({ data: users });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id); 
            const updatedData = req.body; 

            
            const updatedUser = await UserService.update(id, updatedData);

            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async delete(req: Request, res: Response ): Promise<Response>{
        try {
           const id = parseInt(req.params.id);
    
           const deleteUser = await UserService.delete(id,);

           return res.status(200).json(deleteUser);
        } catch (error) {
            console.error(error);
            return res.status(400).json({message: "delete error bro"})
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const { username, password } = req.body;

            const { error } = loginSchema.validate({ username, password });
            if (error) return res.status(400).json({ message: error.details[0].message });

            const user = await UserService.login(username, password);

            if (!user) return res.status(404).json({ message: "Username or password incorrect" });

            return res.status(200).json(user);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

}

    
export default new UserControllers();
