import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentType } from './character-skill-talent-type.enum';

@InputType()
export class NestedEnumCharacterSkillTalentTypeFilter {

    @Field(() => CharacterSkillTalentType, {nullable:true})
    equals?: keyof typeof CharacterSkillTalentType;

    @Field(() => [CharacterSkillTalentType], {nullable:true})
    in?: Array<keyof typeof CharacterSkillTalentType>;

    @Field(() => [CharacterSkillTalentType], {nullable:true})
    notIn?: Array<keyof typeof CharacterSkillTalentType>;

    @Field(() => NestedEnumCharacterSkillTalentTypeFilter, {nullable:true})
    not?: NestedEnumCharacterSkillTalentTypeFilter;
}
