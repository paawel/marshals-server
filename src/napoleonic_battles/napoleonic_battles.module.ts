import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NapoleonicBattlesController } from "./napoleonic_battles.controller";
import { NapoleonicBattlesService } from "./napoleonic_battles.service";
import { NapoleonicBattles } from "./entities/napoleonic_battles.entity";

@Module({
  imports: [TypeOrmModule.forFeature([NapoleonicBattles])],
  controllers: [NapoleonicBattlesController],
  providers: [NapoleonicBattlesService],
})
export class NapoleonicBattlesModule {}
