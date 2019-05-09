import { ApiModelProperty } from '@nestjs/swagger';

export class HogeDto {
  @ApiModelProperty({ description: 'id' })
  id: string;

  @ApiModelProperty()
  name: string;
}
