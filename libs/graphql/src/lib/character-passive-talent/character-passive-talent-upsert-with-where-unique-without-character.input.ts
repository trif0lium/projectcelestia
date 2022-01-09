import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterPassiveTalentWhereUniqueInput } from './character-passive-talent-where-unique.input';
import { CharacterPassiveTalentUpdateWithoutCharacterInput } from './character-passive-talent-update-without-character.input';
import { CharacterPassiveTalentCreateWithoutCharacterInput } from './character-passive-talent-create-without-character.input';

@InputType()
export class CharacterPassiveTalentUpsertWithWhereUniqueWithoutCharacterInput {

    @Field(() => CharacterPassiveTalentWhereUniqueInput, {nullable:false})
    where!: CharacterPassiveTalentWhereUniqueInput;

    @Field(() => CharacterPassiveTalentUpdateWithoutCharacterInput, {nullable:false})
    update!: CharacterPassiveTalentUpdateWithoutCharacterInput;

    @Field(() => CharacterPassiveTalentCreateWithoutCharacterInput, {nullable:false})
    create!: CharacterPassiveTalentCreateWithoutCharacterInput;
}
