import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MarshalsModule } from "./marshals/marshals.module";
import { NapoleonicBattlesModule } from "./napoleonic_battles/napoleonic_battles.module";
import { ConfigModule } from "@nestjs/config";
import * as process from "process";

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      database: "postgres",
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    MarshalsModule,
    NapoleonicBattlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
