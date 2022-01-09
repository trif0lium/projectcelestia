import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterConstellationUpdateInput } from './character-constellation-update.input';
import { CharacterConstellationWhereUniqueInput } from './character-constellation-where-unique.input';

@ArgsType()
export class UpdateOneCharacterConstellationArgs {

    @Field(() => CharacterConstellationUpdateInput, {nullable:false})
    data!: CharacterConstellationUpdateInput;

    @Field(() => CharacterConstellationWhereUniqueInput, {nullable:false})
    where!: CharacterConstellationWhereUniqueInput;
}
