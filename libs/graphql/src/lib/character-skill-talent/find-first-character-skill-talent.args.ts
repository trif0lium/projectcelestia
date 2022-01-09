import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterSkillTalentWhereInput } from './character-skill-talent-where.input';
import { CharacterSkillTalentOrderByWithRelationInput } from './character-skill-talent-order-by-with-relation.input';
import { CharacterSkillTalentWhereUniqueInput } from './character-skill-talent-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacterSkillTalentScalarFieldEnum } from './character-skill-talent-scalar-field.enum';

@ArgsType()
export class FindFirstCharacterSkillTalentArgs {

    @Field(() => CharacterSkillTalentWhereInput, {nullable:true})
    where?: CharacterSkillTalentWhereInput;

    @Field(() => [CharacterSkillTalentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterSkillTalentOrderByWithRelationInput>;

    @Field(() => CharacterSkillTalentWhereUniqueInput, {nullable:true})
    cursor?: CharacterSkillTalentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CharacterSkillTalentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CharacterSkillTalentScalarFieldEnum>;
}
