import { Module } from '@nestjs/common';
import { PrismaModule } from '@projectcelestia/graphql'
import { ArtifactsModule } from '@projectcelestia/artifacts'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    PrismaModule,
    ArtifactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
