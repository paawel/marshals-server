import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NapoleonicBattles {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  date: Date;
}
