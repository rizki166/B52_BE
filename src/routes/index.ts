
import express from "express";
import UserControllers from "../controllers/UserControllers";
import PartaiControllers from "../controllers/PartaiControllers";
import ArticleControllers from "../controllers/ArticleControllers";
import PaslonControllers from "../controllers/PaslonControllers";



const Route = express.Router();
// USER
Route.get("/user", UserControllers.find)
Route.post("/user", UserControllers.create);
Route.put("/users/:id", UserControllers.update);
Route.delete("/user/:id", UserControllers.delete)
Route.post("/login", UserControllers.login)

// route Partai
 Route.get("/Partai", PartaiControllers.find)
 Route.post("/Partai", PartaiControllers.create)
 Route.put("/Partai/:id", PartaiControllers.update)
 Route.delete("/Partai/:id", PartaiControllers.delete)

//  route Article
Route.get("/Article", ArticleControllers.find)
Route.get("/Article/:id", ArticleControllers.findOne);
Route.post("/Article", ArticleControllers.create)
Route.put("/Article/:id", ArticleControllers.update)
Route.delete("/Article/:id", ArticleControllers.delete)


// route Paslon 
Route.get("/Paslon", PaslonControllers.find)
Route.post("/Paslon", PaslonControllers.create)
Route.put("/Paslon/:id", PaslonControllers.update)
Route.delete("/Paslon/:id", PaslonControllers.delete)


export default Route;
