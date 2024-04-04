import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class AddMarshalDto {
  @IsNotEmpty({ message: "ID is Required." })
  @Type(() => String)
  id: string;

  @IsNotEmpty({ message: "Name is Required." })
  @Type(() => String)
  @Type(() => String)
  name: string;

  @IsNotEmpty({ message: "Surname is Required." })
  @Type(() => String)
  surname: string;

  @IsOptional()
  @Type(() => String)
  shortName: string;

  @IsNotEmpty({ message: "Place of birth is Required." })
  placeOfBirth: string;

  @IsNotEmpty({ message: "Date of birth is Required." })
  dateOfBirth: Date;

  @IsString({ each: true })
  battles: Array<string>;
}
