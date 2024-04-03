import {IsNotEmpty, IsString} from "class-validator";

export class AddMarshalDto {
    @IsNotEmpty({message: 'Field name cannot be empty.'})
    id: string;

    @IsNotEmpty({message: 'Field name cannot be empty.'})
    name: string;

    @IsNotEmpty({message: 'Field surname cannot be empty.'})
    surname: string;

    shortName: string;

    @IsNotEmpty({message: 'Place of birth field cannot be empty.'})
    placeOfBirth: string;

    @IsNotEmpty({message: 'Date of birth field cannot be empty.'})
    dateOfBirth: Date

    @IsString({each: true})
    battles: Array<string>;
}
