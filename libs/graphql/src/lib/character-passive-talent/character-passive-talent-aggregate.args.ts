import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterPassiveTalentWhereInput } from './character-passive-talent-where.input';
import { CharacterPassiveTalentOrderByWithRelationInput } from './character-passive-talent-order-by-with-relation.input';
import { CharacterPassiveTalentWhereUniqueInput } from './character-passive-talent-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacterPassiveTalentCountAggregateInput } from './character-passive-talent-count-aggregate.input';
import { CharacterPassiveTalentAvgAggregateInput } from './character-passive-talent-avg-aggregate.input';
import { CharacterPassiveTalentSumAggregateInput } from './character-passive-talent-sum-aggregate.input';
import { CharacterPassiveTalentMinAggregateInput } from './character-passive-talent-min-aggregate.input';
import { CharacterPassiveTalentMaxAggregateInput } from './character-passive-talent-max-aggregate.input';

@ArgsType()
export class CharacterPassiveTalentAggregateArgs {

    @Field(() => CharacterPassiveTalentWhereInput, {nullable:true})
    where?: CharacterPassiveTalentWhereInput;

    @Field(() => [CharacterPassiveTalentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterPassiveTalentOrderByWithRelationInput>;

    @Field(() => CharacterPassiveTalentWhereUniqueInput, {nullable:true})
    cursor?: CharacterPassiveTalentWhereUniqueInput;

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
