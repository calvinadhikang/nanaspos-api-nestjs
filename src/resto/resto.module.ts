import { Module } from '@nestjs/common';
import { RestoService } from './resto.service';
import { RestoController } from './resto.controller';

@Module({
  providers: [RestoService],
  controllers: [RestoController]
})
export class RestoModule {}
