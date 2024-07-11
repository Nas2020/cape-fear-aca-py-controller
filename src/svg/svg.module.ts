import { Module } from '@nestjs/common';
import { SvgService } from './svg.service';
import { SvgController } from './svg.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [SvgService],
  controllers: [SvgController],
})
export class SvgModule {}
