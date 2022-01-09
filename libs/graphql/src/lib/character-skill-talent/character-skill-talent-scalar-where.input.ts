import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCharacterSkillTalentTypeFilter } from '../prisma/enum-character-skill-talent-type-filter.input';

@InputType()
export class CharacterSkillTalentScalarWhereInput {

    @Field(() => [CharacterSkillTalentScalarWhereInput], {nullable:true})
    AND?: Array<CharacterSkillTalentScalarWhereInput>;

    @Field(() => [CharacterSkillTalentScalarWhereInput], {nullable:true})
    OR?: Array<CharacterSkillTalentScalarWhereInput>;

    @Field(() => [CharacterSkillTalentScalarWhereInput], {nullable:true})
    NOT?: Array<CharacterSkillTalentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    characterId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    unlock?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumCharacterSkillTalentTypeFilter, {nullable:true})
    type?: EnumCharacterSkillTalentTypeFilter;
}
