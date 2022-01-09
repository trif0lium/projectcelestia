import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentType } from './character-skill-talent-type.enum';
import { NestedEnumCharacterSkillTalentTypeWithAggregatesFilter } from './nested-enum-character-skill-talent-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCharacterSkillTalentTypeFilter } from './nested-enum-character-skill-talent-type-filter.input';

@InputType()
export class EnumCharacterSkillTalentTypeWithAggregatesFilter {

    @Field(() => CharacterSkillTalentType, {nullable:true})
    equals?: keyof typeof CharacterSkillTalentType;

    @Field(() => [CharacterSkillTalentType], {nullable:true})
    in?: Array<keyof typeof CharacterSkillTalentType>;

    @Field(() => [CharacterSkillTalentType], {nullable:true})
    notIn?: Array<keyof typeof CharacterSkillTalentType>;

    @Field(() => NestedEnumCharacterSkillTalentTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCharacterSkillTalentTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCharacterSkillTalentTypeFilter, {nullable:true})
    _min?: NestedEnumCharacterSkillTalentTypeFilter;

    @Field(() => NestedEnumCharacterSkillTalentTypeFilter, {nullable:true})
    _max?: NestedEnumCharacterSkillTalentTypeFilter;
}
