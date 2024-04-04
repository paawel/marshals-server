import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Marshal } from "../entities/marshal.entity";
import { MarshalsController } from "./marshals.controller";
import { MarshalsService } from "./marshals.service";
import { Battle } from "../entities/battles.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Marshal, Battle])],
  controllers: [MarshalsController],
  providers: [MarshalsService],
})
export class MarshalsModule {}
