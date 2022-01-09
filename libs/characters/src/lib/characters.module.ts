import { Module } from '@nestjs/common';
import { PrismaModule } from '@projectcelestia/graphql'

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class CharactersModule {}
