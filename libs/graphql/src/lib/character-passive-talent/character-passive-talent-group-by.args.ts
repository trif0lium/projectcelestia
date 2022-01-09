import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterPassiveTalentWhereInput } from './character-passive-talent-where.input';
import { CharacterPassiveTalentOrderByWithAggregationInput } from './character-passive-talent-order-by-with-aggregation.input';
import { CharacterPassiveTalentScalarFieldEnum } from './character-passive-talent-scalar-field.enum';
import { CharacterPassiveTalentScalarWhereWithAggregatesInput } from './character-passive-talent-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CharacterPassiveTalentCountAggregateInput } from './character-passive-talent-count-aggregate.input';
import { CharacterPassiveTalentAvgAggregateInput } from './character-passive-talent-avg-aggregate.input';
import { CharacterPassiveTalentSumAggregateInput } from './character-passive-talent-sum-aggregate.input';
import { CharacterPassiveTalentMinAggregateInput } from './character-passive-talent-min-aggregate.input';
import { CharacterPassiveTalentMaxAggregateInput } from './character-passive-talent-max-aggregate.input';

@ArgsType()
export class CharacterPassiveTalentGroupByArgs {

    @Field(() => CharacterPassiveTalentWhereInput, {nullable:true})
    where?: CharacterPassiveTalentWhereInput;

    @Field(() => [CharacterPassiveTalentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CharacterPassiveTalentOrderByWithAggregationInput>;

    @Field(() => [CharacterPassiveTalentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CharacterPassiveTalentScalarFieldEnum>;

    @Field(() => CharacterPassiveTalentScalarWhereWithAggregatesInput, {nullable:true})
    having?: CharacterPassiveTalentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CharacterPassiveTalentCountAggregateInput, {nullable:true})
    _count?: CharacterPassiveTalentCountAggregateInput;

    @Field(() => CharacterPassiveTalentAvgAggregateInput, {nullable:true})
    _avg?: CharacterPassiveTalentAvgAggregateInput;

    @Field(() => CharacterPassiveTalentSumAggregateInput, {nullable:true})
    _sum?: CharacterPassiveTalentSumAggregateInput;

    @Field(() => CharacterPassiveTalentMinAggregateInput, {nullable:true})
    _min?: CharacterPassiveTalentMinAggregateInput;

    @Field(() => CharacterPassiveTalentMaxAggregateInput, {nullable:true})
    _max?: CharacterPassiveTalentMaxAggregateInput;
}
