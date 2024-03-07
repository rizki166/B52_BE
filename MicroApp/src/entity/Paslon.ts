import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";



@Entity()
export class Paslon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    nomerUrut: number;

    @Column()
    name: string;

    @Column()
    visiMisi: string;

    @Column()
    Koaslisi: string;


    
}
