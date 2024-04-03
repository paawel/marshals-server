import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Napoleonic_Battles} from "../entities/napoleonic_battles.entity";
import {NapoleonicBattlesController} from "./napoleonic_battles.controller";
import {NapoleonicBattlesService} from "./napoleonic_battles.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Napoleonic_Battles])
    ],
    controllers: [NapoleonicBattlesController],
    providers: [NapoleonicBattlesService]
})

export class NapoleonicBattlesModule {
}