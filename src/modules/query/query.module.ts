import { Module } from '@nestjs/common';
import { QueryResolvers } from './query.resolvers';
import { QueryService } from './query.service';

@Module({
  providers: [
    QueryService,
    QueryResolvers,
  ],
})
export class QueryModule {}