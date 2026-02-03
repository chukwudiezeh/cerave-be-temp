import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoterController } from './voter.controller';
import { VoterService } from './voter.service';
import { Voter } from './entities/voter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voter])],
  controllers: [VoterController],
  providers: [VoterService],
  exports: [VoterService],
})
export class VoterModule {}
