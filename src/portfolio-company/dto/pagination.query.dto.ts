import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum SearchFieldEnum {
  PITCHBOOK_NAME = 'portfolio_pb_name',
  DUNS_NUMBER = 'portfolio_duns_number',
  SWIFT_CLIENT_NUMBER = 'portfolio_swift_client_number',
  PITCHBOOK_ID = 'portfolio_pb_id',
  GMDM_ID = 'portfolio_gmdm_id',
  DGMF_ID = 'portfolio_dgmf_id',
}

export class QueryParameterDto {
  @ApiProperty({
    description: 'Page number for pagination',
    default: 1,
  })
  @IsOptional()
  @IsString()
  pageNo?: string = '1';

  @ApiPropertyOptional({
    description: 'Number of records per page for pagination',
    default: '10',
    example: '10',
  })
  @IsOptional()
  @IsString()
  limit?: string = '10';

  @ApiPropertyOptional({
    description: 'Field to perform search on',
    enum: SearchFieldEnum,
    default: SearchFieldEnum.PITCHBOOK_NAME,
  })
  @IsOptional()
  @IsEnum(SearchFieldEnum)
  searchField?: SearchFieldEnum = SearchFieldEnum.PITCHBOOK_NAME;

  @ApiPropertyOptional({ example: 'abc inc' })
  @IsOptional()
  @IsString()
  searchText?: string;
}
