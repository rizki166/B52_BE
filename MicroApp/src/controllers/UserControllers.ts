import { Request, Response } from "express";
import UserService from "../service/UserService";

class UserControllers {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
            const user = await UserService.create(data);
            return res.status(201).json(data); 
        } catch (error) {
            console.error(error); 
            return res.status(500).json({ message: "Internal server error" }); 
        }
    }
}

export default new UserControllers();
