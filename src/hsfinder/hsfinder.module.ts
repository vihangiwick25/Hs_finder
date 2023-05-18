import { Module } from '@nestjs/common';
import { HsfinderController } from './hsfinder.controller';
import { HsfinderService } from './hsfinder.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HsfinderSchema } from './schema/hsfinder.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: "Hsfinder", schema: HsfinderSchema }])],
  controllers: [HsfinderController],
  providers: [HsfinderService]
})
export class HsfinderModule {}
