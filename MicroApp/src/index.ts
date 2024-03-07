import { AppDataSource } from "./data-source";
import express, { Request, Response } from "express";
import Route from "./routes";

AppDataSource.initialize().then(async () => {
    const app = express();
    const port = 5000;

    app.use(express.json());
    app.use('/api/v1', Route);

    app.get('/Hello', (req: Request, res: Response) => {
        res.status(200).json({ data: "success" });
    });

    app.listen(port, () => console.log(`Server success on port ${port}`));
}).catch(error => console.log(error));
