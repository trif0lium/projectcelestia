import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterSkillTalentWhereInput } from './character-skill-talent-where.input';
import { CharacterSkillTalentOrderByWithAggregationInput } from './character-skill-talent-order-by-with-aggregation.input';
import { CharacterSkillTalentScalarFieldEnum } from './character-skill-talent-scalar-field.enum';
import { CharacterSkillTalentScalarWhereWithAggregatesInput } from './character-skill-talent-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CharacterSkillTalentCountAggregateInput } from './character-skill-talent-count-aggregate.input';
import { CharacterSkillTalentMinAggregateInput } from './character-skill-talent-min-aggregate.input';
import { CharacterSkillTalentMaxAggregateInput } from './character-skill-talent-max-aggregate.input';

@ArgsType()
export class CharacterSkillTalentGroupByArgs {

    @Field(() => CharacterSkillTalentWhereInput, {nullable:true})
    where?: CharacterSkillTalentWhereInput;

    @Field(() => [CharacterSkillTalentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CharacterSkillTalentOrderByWithAggregationInput>;

    @Field(() => [CharacterSkillTalentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CharacterSkillTalentScalarFieldEnum>;

    @Field(() => CharacterSkillTalentScalarWhereWithAggregatesInput, {nullable:true})
    having?: CharacterSkillTalentScalarWhereWithAggregatesInput;

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
