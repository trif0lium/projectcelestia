import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterConstellationWhereUniqueInput } from './character-constellation-where-unique.input';
import { CharacterConstellationCreateWithoutCharacterInput } from './character-constellation-create-without-character.input';

@InputType()
export class CharacterConstellationCreateOrConnectWithoutCharacterInput {

    @Field(() => CharacterConstellationWhereUniqueInput, {nullable:false})
    where!: CharacterConstellationWhereUniqueInput;

    @Field(() => CharacterConstellationCreateWithoutCharacterInput, {nullable:false})
    create!: CharacterConstellationCreateWithoutCharacterInput;
}
