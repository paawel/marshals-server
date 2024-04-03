import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Marshal} from "./marshal.entity";

@Entity()
export class Battle {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @ManyToMany(
        type => Marshal,
        (marshal: Marshal) => marshal.battles
    )
    battlefields: Marshal[];
}
