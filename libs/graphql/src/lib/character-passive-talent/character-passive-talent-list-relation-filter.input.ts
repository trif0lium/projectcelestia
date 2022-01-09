import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterPassiveTalentWhereInput } from './character-passive-talent-where.input';

@InputType()
export class CharacterPassiveTalentListRelationFilter {

    @Field(() => CharacterPassiveTalentWhereInput, {nullable:true})
    every?: CharacterPassiveTalentWhereInput;

    @Field(() => CharacterPassiveTalentWhereInput, {nullable:true})
    some?: CharacterPassiveTalentWhereInput;

    @Field(() => CharacterPassiveTalentWhereInput, {nullable:true})
    none?: CharacterPassiveTalentWhereInput;
}
