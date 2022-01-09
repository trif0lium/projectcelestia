import { Module } from '@nestjs/common';
import { PrismaModule } from '@projectcelestia/graphql'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot({})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
