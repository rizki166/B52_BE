import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

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
}
