import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './author/authors.module';

@Module({
  imports: [GraphQLModule.forRoot({ typePaths: ['./**/*.graphql'] }), AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
