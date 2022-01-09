import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { CharacterRelationFilter } from '../character/character-relation-filter.input';
import { EnumCharacterSkillTalentTypeFilter } from '../prisma/enum-character-skill-talent-type-filter.input';

@InputType()
export class CharacterSkillTalentWhereInput {

    @Field(() => [CharacterSkillTalentWhereInput], {nullable:true})
    AND?: Array<CharacterSkillTalentWhereInput>;

    @Field(() => [CharacterSkillTalentWhereInput], {nullable:true})
    OR?: Array<CharacterSkillTalentWhereInput>;

    @Field(() => [CharacterSkillTalentWhereInput], {nullable:true})
    NOT?: Array<CharacterSkillTalentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    characterId?: StringFilter;

    @Field(() => CharacterRelationFilter, {nullable:true})
    character?: CharacterRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    unlock?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumCharacterSkillTalentTypeFilter, {nullable:true})
    type?: EnumCharacterSkillTalentTypeFilter;
}
