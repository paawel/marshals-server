import {PartialType} from "@nestjs/mapped-types";
import {AddMarshalDto} from "./add-marshal.dto";


export class UpdateMarshalDto extends PartialType(AddMarshalDto) {}
