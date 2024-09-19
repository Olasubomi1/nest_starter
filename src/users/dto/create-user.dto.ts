import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  alias: string;
  @ApiProperty({ required: false })
  age: number;
}
