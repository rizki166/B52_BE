import { Entity, PrimaryGeneratedColumn, Column, OneToMany  } from "typeorm"
import { Partai } from "./Partai"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nameUser: string
    @Column()
    address: string
    @Column()
    dateOfBirth: Date;
    @Column()
    gender: string;
    @Column()
    username: string

    @Column()
    password: string

   @OneToMany(() => Partai, (partai) => partai.user)
   partai:Partai

}
