import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ValueDto {
  @ApiProperty({ example: 'test' })
  @IsString()
  value!: string;
}
