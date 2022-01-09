import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumCharacterSkillTalentTypeWithAggregatesFilter } from '../prisma/enum-character-skill-talent-type-with-aggregates-filter.input';

@InputType()
export class CharacterSkillTalentScalarWhereWithAggregatesInput {

    @Field(() => [CharacterSkillTalentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CharacterSkillTalentScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterSkillTalentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CharacterSkillTalentScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterSkillTalentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CharacterSkillTalentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    characterId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    unlock?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => EnumCharacterSkillTalentTypeWithAggregatesFilter, {nullable:true})
    type?: EnumCharacterSkillTalentTypeWithAggregatesFilter;
}
