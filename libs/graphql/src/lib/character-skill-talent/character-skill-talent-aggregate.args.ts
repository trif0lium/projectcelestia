import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterSkillTalentWhereInput } from './character-skill-talent-where.input';
import { CharacterSkillTalentOrderByWithRelationInput } from './character-skill-talent-order-by-with-relation.input';
import { CharacterSkillTalentWhereUniqueInput } from './character-skill-talent-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacterSkillTalentCountAggregateInput } from './character-skill-talent-count-aggregate.input';
import { CharacterSkillTalentMinAggregateInput } from './character-skill-talent-min-aggregate.input';
import { CharacterSkillTalentMaxAggregateInput } from './character-skill-talent-max-aggregate.input';

@ArgsType()
export class CharacterSkillTalentAggregateArgs {

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

    @Field(() => CharacterSkillTalentCountAggregateInput, {nullable:true})
    _count?: CharacterSkillTalentCountAggregateInput;

    @Field(() => CharacterSkillTalentMinAggregateInput, {nullable:true})
    _min?: CharacterSkillTalentMinAggregateInput;

    @Field(() => CharacterSkillTalentMaxAggregateInput, {nullable:true})
    _max?: CharacterSkillTalentMaxAggregateInput;
}
