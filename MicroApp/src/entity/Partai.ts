import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Users } from "./Users";


@Entity()
export class Partai {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;
   
    @Column()
    namePartai: string;
   
    @Column()
    KetuaUmum: string;

    @Column()
    visiMisi: string;

    @Column()
    Address: string;


    @ManyToOne(() => Users, (user) => user.partai)
    user: Users;
}
