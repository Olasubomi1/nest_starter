import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsAlphanumeric, MaxLength, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(20)
  alias?: string;
  @ApiProperty({ required: false })
  @IsNumber()
  age?: number;
}
