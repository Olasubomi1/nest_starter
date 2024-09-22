import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(20)
  alias: string;
  @ApiProperty({ required: false })
  @IsNumber()
  age: number;
}
