import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";



@Entity()
export class Voter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string


    @Column()
    adress: string

    @Column()
    jenisKelamin: string

    @Column()
    paslon: string
    
    
}
