import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MarshalsModule} from './marshals/marshals.module';
import {NapoleonicBattlesModule} from "./napoleonic_battles/napoleonic_battles.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "123",
            database: "postgres",
            autoLoadEntities: true,
            synchronize: true
        }),
        MarshalsModule,
        NapoleonicBattlesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
