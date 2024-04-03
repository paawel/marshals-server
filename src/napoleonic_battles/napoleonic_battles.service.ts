import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Napoleonic_Battles} from "../entities/napoleonic_battles.entity";
import {Repository} from "typeorm";
import {AddBattleDto} from "./dto/add-battle.dto";

@Injectable()
export class NapoleonicBattlesService {
    constructor(
        @InjectRepository(Napoleonic_Battles)
        private readonly napoleonicBattlesRep: Repository<Napoleonic_Battles>
    ) {
    }

    findAll(): Promise<Array<Napoleonic_Battles>> {
        return this.napoleonicBattlesRep.find();
    }


    async create(objDto: AddBattleDto): Promise<Napoleonic_Battles> {
        return this.napoleonicBattlesRep.save(objDto);
    }

}
