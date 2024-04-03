import {Body, Controller, Get, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {NapoleonicBattlesService} from "./napoleonic_battles.service";
import {Napoleonic_Battles} from "../entities/napoleonic_battles.entity";
import {AddBattleDto} from "./dto/add-battle.dto";

@Controller('battles')
export class NapoleonicBattlesController {

    constructor(private readonly napoleonicBattlesService: NapoleonicBattlesService) {
    }

    @Get()
    async findAll(): Promise<Array<Napoleonic_Battles>> {
        return this.napoleonicBattlesService.findAll();
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createBattle(@Body() data: AddBattleDto): Promise<Napoleonic_Battles> {
        return this.napoleonicBattlesService.create(data);
    }
}
