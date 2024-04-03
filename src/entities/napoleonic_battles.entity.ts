import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Napoleonic_Battles {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    date: Date;
}
