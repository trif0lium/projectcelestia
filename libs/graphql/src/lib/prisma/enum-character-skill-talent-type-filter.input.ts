import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentType } from './character-skill-talent-type.enum';
import { NestedEnumCharacterSkillTalentTypeFilter } from './nested-enum-character-skill-talent-type-filter.input';

@InputType()
export class EnumCharacterSkillTalentTypeFilter {

    @Field(() => CharacterSkillTalentType, {nullable:true})
    equals?: keyof typeof CharacterSkillTalentType;

    @Field(() => [CharacterSkillTalentType], {nullable:true})
    in?: Array<keyof typeof CharacterSkillTalentType>;

    @Field(() => [CharacterSkillTalentType], {nullable:true})
    notIn?: Array<keyof typeof CharacterSkillTalentType>;

    @Field(() => NestedEnumCharacterSkillTalentTypeFilter, {nullable:true})
    not?: NestedEnumCharacterSkillTalentTypeFilter;
}
