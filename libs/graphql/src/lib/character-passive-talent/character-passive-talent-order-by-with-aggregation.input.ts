import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharacterPassiveTalentCountOrderByAggregateInput } from './character-passive-talent-count-order-by-aggregate.input';
import { CharacterPassiveTalentAvgOrderByAggregateInput } from './character-passive-talent-avg-order-by-aggregate.input';
import { CharacterPassiveTalentMaxOrderByAggregateInput } from './character-passive-talent-max-order-by-aggregate.input';
import { CharacterPassiveTalentMinOrderByAggregateInput } from './character-passive-talent-min-order-by-aggregate.input';
import { CharacterPassiveTalentSumOrderByAggregateInput } from './character-passive-talent-sum-order-by-aggregate.input';

@InputType()
export class CharacterPassiveTalentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unlock?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;

    @Field(() => CharacterPassiveTalentCountOrderByAggregateInput, {nullable:true})
    _count?: CharacterPassiveTalentCountOrderByAggregateInput;

    @Field(() => CharacterPassiveTalentAvgOrderByAggregateInput, {nullable:true})
    _avg?: CharacterPassiveTalentAvgOrderByAggregateInput;

    @Field(() => CharacterPassiveTalentMaxOrderByAggregateInput, {nullable:true})
    _max?: CharacterPassiveTalentMaxOrderByAggregateInput;

    @Field(() => CharacterPassiveTalentMinOrderByAggregateInput, {nullable:true})
    _min?: CharacterPassiveTalentMinOrderByAggregateInput;

    @Field(() => CharacterPassiveTalentSumOrderByAggregateInput, {nullable:true})
    _sum?: CharacterPassiveTalentSumOrderByAggregateInput;
}
