
import express from "express";
import UserControllers from "../controllers/UserControllers";

const Route = express.Router();


Route.post("/user", UserControllers.create);


export default Route;
