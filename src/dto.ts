import { ApiProperty } from '@nestjs/swagger';

export class HogeDto {
  @ApiProperty({ description: 'id' })
  id: string;

  @ApiProperty()
  name: string;
}
