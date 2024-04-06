import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AddBattleDto } from "./dto/add-battle.dto";
import { NapoleonicBattles } from "./entities/napoleonic_battles.entity";

@Injectable()
export class NapoleonicBattlesService {
  constructor(
    @InjectRepository(NapoleonicBattles)
    private readonly napoleonicBattlesRep: Repository<NapoleonicBattles>,
  ) {}

  findAll(): Promise<Array<NapoleonicBattles>> {
    return this.napoleonicBattlesRep.find();
  }

  async create(objDto: AddBattleDto): Promise<NapoleonicBattles> {
    return this.napoleonicBattlesRep.save(objDto);
  }
}
