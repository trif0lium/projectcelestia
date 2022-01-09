import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterConstellationWhereInput } from './character-constellation-where.input';

@ArgsType()
export class DeleteManyCharacterConstellationArgs {

    @Field(() => CharacterConstellationWhereInput, {nullable:true})
    where?: CharacterConstellationWhereInput;
}
