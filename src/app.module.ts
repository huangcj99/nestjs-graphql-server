import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TestModule } from './modules/test/test.module';
import { QueryModule } from './modules/query/query.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // graphql file path
      typePaths: [
        './**/*.graphql',
      ],
      // GraphQL IDE
      playground: true,
    }),
    // restful
    TestModule,
    // graphql
    QueryModule,
  ],
})
export class AppModule {}
