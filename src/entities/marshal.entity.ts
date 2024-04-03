import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Battle} from "./battles.entity";

@Entity()
export class Marshal {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    shortName: string;

    @Column()
    placeOfBirth: string;

    @Column()
    dateOfBirth: Date;

    @JoinTable()
    @ManyToMany(
        type => Battle,
        (battle: Battle) => battle.battlefields,
        {
            cascade: true
        }
    )
    battles: Array<Battle>;
}
