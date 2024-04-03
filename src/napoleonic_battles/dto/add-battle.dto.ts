import {IsNotEmpty} from "class-validator";

export class AddBattleDto {
    @IsNotEmpty({message: 'Field name cannot be empty.'})
    id: string;

    @IsNotEmpty({message: 'Field name cannot be empty.'})
    name: string;

    @IsNotEmpty({message: 'Date field cannot be empty.'})
    date: Date
}
