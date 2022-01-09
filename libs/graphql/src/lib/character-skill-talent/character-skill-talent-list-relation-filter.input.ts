import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentWhereInput } from './character-skill-talent-where.input';

@InputType()
export class CharacterSkillTalentListRelationFilter {

    @Field(() => CharacterSkillTalentWhereInput, {nullable:true})
    every?: CharacterSkillTalentWhereInput;

    @Field(() => CharacterSkillTalentWhereInput, {nullable:true})
    some?: CharacterSkillTalentWhereInput;

    @Field(() => CharacterSkillTalentWhereInput, {nullable:true})
    none?: CharacterSkillTalentWhereInput;
}
