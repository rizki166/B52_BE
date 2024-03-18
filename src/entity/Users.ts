import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Article } from "./Article";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameUser: string;

    @Column()
    address: string;

    @Column()
    gender: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Article, (article) => article.author)
    articles: Article[];
}
