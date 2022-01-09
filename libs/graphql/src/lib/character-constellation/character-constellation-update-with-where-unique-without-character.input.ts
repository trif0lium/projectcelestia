import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterConstellationWhereUniqueInput } from './character-constellation-where-unique.input';
import { CharacterConstellationUpdateWithoutCharacterInput } from './character-constellation-update-without-character.input';

@InputType()
export class CharacterConstellationUpdateWithWhereUniqueWithoutCharacterInput {

    @Field(() => CharacterConstellationWhereUniqueInput, {nullable:false})
    where!: CharacterConstellationWhereUniqueInput;

    @Field(() => CharacterConstellationUpdateWithoutCharacterInput, {nullable:false})
    data!: CharacterConstellationUpdateWithoutCharacterInput;
}
