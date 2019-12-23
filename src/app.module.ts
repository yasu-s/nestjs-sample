import { HttpService, Module, Scope } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import Axios from 'axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { App2Service } from './app2.service';
import { AuthorsModule } from './author/authors.module';

@Module({
  imports: [GraphQLModule.forRoot({ typePaths: ['./**/*.graphql'] }), AuthorsModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: 'TEST_SERVICE', useClass: App2Service },
    {
      provide: HttpService,
      scope: Scope.REQUEST,
      useFactory: () => {
        return new HttpService(Axios.create());
      },
    },
  ],
})
export class AppModule {}
