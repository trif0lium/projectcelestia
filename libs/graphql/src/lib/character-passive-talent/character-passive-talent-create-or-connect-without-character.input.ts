import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterPassiveTalentWhereUniqueInput } from './character-passive-talent-where-unique.input';
import { CharacterPassiveTalentCreateWithoutCharacterInput } from './character-passive-talent-create-without-character.input';

@InputType()
export class CharacterPassiveTalentCreateOrConnectWithoutCharacterInput {

    @Field(() => CharacterPassiveTalentWhereUniqueInput, {nullable:false})
    where!: CharacterPassiveTalentWhereUniqueInput;

    @Field(() => CharacterPassiveTalentCreateWithoutCharacterInput, {nullable:false})
    create!: CharacterPassiveTalentCreateWithoutCharacterInput;
}
