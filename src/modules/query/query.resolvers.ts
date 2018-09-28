import { OnModuleInit } from '@nestjs/common/interfaces/modules';
import { Query, Resolver } from '@nestjs/graphql';
import { QueryService } from './query.service';

@Resolver('Cat')
export class QueryResolvers implements OnModuleInit {
  // 实现初始化接口
  onModuleInit() {
    console.log(this);
  }

  constructor(private readonly queryService: QueryService) {}

  @Query('getCats')
  getCats() {
    return this.queryService.findAll();
  }
}