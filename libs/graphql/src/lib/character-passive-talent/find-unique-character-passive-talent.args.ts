import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterPassiveTalentWhereUniqueInput } from './character-passive-talent-where-unique.input';

@ArgsType()
export class FindUniqueCharacterPassiveTalentArgs {

    @Field(() => CharacterPassiveTalentWhereUniqueInput, {nullable:false})
    where!: CharacterPassiveTalentWhereUniqueInput;
}
