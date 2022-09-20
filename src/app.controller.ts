import {
  Controller,
  Get,
  Post,
  Delete,
  Inject,
  Param,
  Body,
} from '@nestjs/common';

import {
  ApiBody,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AppService } from './app.service';
import { ValueDto } from './dto';

@ApiTags('')
@Controller('storage')
export class AppController {
  constructor(
    @Inject(AppService.name)
    private appService: AppService,
  ) {}

  @ApiOperation({ summary: 'set value' })
  @ApiBody({ type: ValueDto })
  @Post('/:key')
  async set(
    @Param('key') key: string,
    @Body() dto: ValueDto

  ) {
    return this.appService.set(key, dto.value);
  }

  @ApiOperation({ summary: 'get value' })
  @Get('/:key')
  async get(
    @Param('key') key: string,

  ) {
    return this.appService.get(key);
  }

  @ApiOperation({ summary: 'get value' })
  @Delete('/:key')
  async del(
    @Param('key') key: string,

  ) {
    return this.appService.del(key);
  }
}