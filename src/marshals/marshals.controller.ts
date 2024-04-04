import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { MarshalsService } from "./marshals.service";
import { Marshal } from "../entities/marshal.entity";
import { AddMarshalDto } from "./dto/add-marshal.dto";
import { UpdateMarshalDto } from "./dto/update-marshal.dto";

@Controller("marshals")
export class MarshalsController {
  constructor(private readonly marshalService: MarshalsService) {}

  @Get()
  async findAll(): Promise<Marshal[]> {
    return this.marshalService.findAll();
  }

  @Get("/:id")
  async findPerson(@Param("id") id: string): Promise<Marshal> {
    return this.marshalService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createMarshal(@Body() input: AddMarshalDto): Promise<Marshal> {
    return this.marshalService.create(input);
  }

  @Patch(":id")
  async updateMarshalInfo(@Param("id") id: string, @Body() data: UpdateMarshalDto): Promise<Marshal> {
    return this.marshalService.update(id, data);
  }
}
