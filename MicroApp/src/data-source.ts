import "reflect-metadata"
import { DataSource } from "typeorm"
import { Partai } from "./entity/Partai"
import { Users } from "./entity/Users"
import { Article } from "./entity/Article"
import { Paslon } from "./entity/Paslon"
import { Voting } from "./entity/Voting"
import { Voter } from "./entity/Voter"




export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "B52_Micro-app",
    synchronize: true,
    logging: false,
    entities: [Users,Partai,Paslon,Voter,Voting,Article ],
    migrations: [],
    subscribers: [],
})
