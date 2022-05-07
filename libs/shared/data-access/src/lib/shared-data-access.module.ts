import { Module } from '@nestjs/common';
import { SharedDataAccessService } from './shared-data-access.service';

@Module({
  controllers: [],
  providers: [SharedDataAccessService],
  exports: [SharedDataAccessService],
})
export class SharedDataAccessModule {}
