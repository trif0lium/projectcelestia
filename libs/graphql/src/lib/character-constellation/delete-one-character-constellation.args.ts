import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterConstellationWhereUniqueInput } from './character-constellation-where-unique.input';

@ArgsType()
export class DeleteOneCharacterConstellationArgs {

    @Field(() => CharacterConstellationWhereUniqueInput, {nullable:false})
    where!: CharacterConstellationWhereUniqueInput;
}
