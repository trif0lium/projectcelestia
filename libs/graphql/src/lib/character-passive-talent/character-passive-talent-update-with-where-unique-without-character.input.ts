import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterPassiveTalentWhereUniqueInput } from './character-passive-talent-where-unique.input';
import { CharacterPassiveTalentUpdateWithoutCharacterInput } from './character-passive-talent-update-without-character.input';

@InputType()
export class CharacterPassiveTalentUpdateWithWhereUniqueWithoutCharacterInput {

    @Field(() => CharacterPassiveTalentWhereUniqueInput, {nullable:false})
    where!: CharacterPassiveTalentWhereUniqueInput;

    @Field(() => CharacterPassiveTalentUpdateWithoutCharacterInput, {nullable:false})
    data!: CharacterPassiveTalentUpdateWithoutCharacterInput;
}
