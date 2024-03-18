import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Paslon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true }) 
    image: string;

    @Column()
    nomerUrut: number;

    @Column()
    name: string;

    @Column()
    visiMisi: string;

    @Column( { nullable: true })
    Koaslisi: string;
}
