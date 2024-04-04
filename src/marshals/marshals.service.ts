import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Marshal } from "../entities/marshal.entity";
import { Repository } from "typeorm";
import { AddMarshalDto } from "./dto/add-marshal.dto";
import { UpdateMarshalDto } from "./dto/update-marshal.dto";
import { Battle } from "../entities/battles.entity";

@Injectable()
export class MarshalsService {
  constructor(
    @InjectRepository(Marshal)
    private readonly marshalRep: Repository<Marshal>,
    @InjectRepository(Battle)
    private readonly battleRep: Repository<Battle>,
  ) {}

  findAll(): Promise<Array<Marshal>> {
    return this.marshalRep.find({
      relations: ["battles"],
    });
  }

  async findOne(id: string): Promise<Marshal> {
    // @ts-ignore
    return await this.marshalRep.findBy(
      { id }
    );
  }

  async create(objDto: AddMarshalDto): Promise<Marshal> {
    const battles: Array<Battle> = await Promise.all(objDto.battles.map((name: string) => this.preloadBattleByName(name)));

    const marshal: Marshal = this.marshalRep.create({
      ...objDto,
      battles,
    });
    return this.marshalRep.save(marshal);
  }

  async update(id: string, objDto: UpdateMarshalDto): Promise<Marshal> {
    const battles: Array<Battle> = objDto.battles && (await Promise.all(objDto.battles.map((name: string) => this.preloadBattleByName(name))));

    const marshal: Marshal = await this.marshalRep.preload({
      id: id,
      ...objDto,
      battles,
    });

    if (!marshal) {
      throw new NotFoundException(`${id} not found`);
    }

    return this.marshalRep.save(marshal);
  }

  async remove(id: string): Promise<Marshal> {
    // @ts-ignore
    const marshal: Marshal = await this.marshalRep.findOne(id);
    return this.marshalRep.remove(marshal);
  }

  private async preloadBattleByName(name: string): Promise<Battle> {
    // console.log("battle", name);
    // // @ts-ignore
    // const existBattle: Battle = await this.battleRep.findBy({name});
    // if(existBattle) return existBattle;

    return this.battleRep.create({
      name,
    });
  }
}
