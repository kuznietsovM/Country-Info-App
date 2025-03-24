import { IsString } from "class-validator";


//   I considered that user could be stored in different db (such as sql)
//   so I decided not to stick to mongoId and left it as a string.


export class UserParamsDto {
    @IsString()
    userId: string
}