import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";



@Entity()
export class Voting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string


    @Column()
    hasil: string
    
}
