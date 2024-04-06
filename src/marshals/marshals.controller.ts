import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Req } from "@nestjs/common";
import { MarshalsService } from "./marshals.service";
import { AddMarshalDto } from "./dto/add-marshal.dto";
import { UpdateMarshalDto } from "./dto/update-marshal.dto";
import { Marshal } from "./entities/marshal.entity";
import { ActiveUser } from "../iam/decorators/active-user.decorator";
import { ActiveUserData } from "../iam/interfaces/active-user-data.interface";

@Controller("marshals")
export class MarshalsController {
  constructor(private readonly marshalService: MarshalsService) {
  }

  @Get()
  async findAll(
    @ActiveUser() user: ActiveUserData,
  ): Promise<Marshal[]> {
    console.log(user);
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
