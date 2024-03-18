import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  image: string;

  @Column()
  date: Date;

  @Column()
  content: string;

  @ManyToOne(() => Users, (user) => user.articles, {
    cascade: ["remove"],
    onDelete: "SET NULL"
})
user: Users
  
}
