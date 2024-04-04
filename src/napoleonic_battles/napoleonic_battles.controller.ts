import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { NapoleonicBattlesService } from "./napoleonic_battles.service";
import { NapoleonicBattles } from "../entities/napoleonic_battles.entity";
import { AddBattleDto } from "./dto/add-battle.dto";

@Controller("battles")
export class NapoleonicBattlesController {
  constructor(private readonly napoleonicBattlesService: NapoleonicBattlesService) {}

  @Get()
  async findAll(): Promise<Array<NapoleonicBattles>> {
    return this.napoleonicBattlesService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createBattle(@Body() data: AddBattleDto): Promise<NapoleonicBattles> {
    return this.napoleonicBattlesService.create(data);
  }
}
