import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterConstellationWhereUniqueInput } from './character-constellation-where-unique.input';
import { CharacterConstellationUpdateWithoutCharacterInput } from './character-constellation-update-without-character.input';
import { CharacterConstellationCreateWithoutCharacterInput } from './character-constellation-create-without-character.input';

@InputType()
export class CharacterConstellationUpsertWithWhereUniqueWithoutCharacterInput {

    @Field(() => CharacterConstellationWhereUniqueInput, {nullable:false})
    where!: CharacterConstellationWhereUniqueInput;

    @Field(() => CharacterConstellationUpdateWithoutCharacterInput, {nullable:false})
    update!: CharacterConstellationUpdateWithoutCharacterInput;

    @Field(() => CharacterConstellationCreateWithoutCharacterInput, {nullable:false})
    create!: CharacterConstellationCreateWithoutCharacterInput;
}
