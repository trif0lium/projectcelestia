import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharacterCountOrderByAggregateInput } from './character-count-order-by-aggregate.input';
import { CharacterAvgOrderByAggregateInput } from './character-avg-order-by-aggregate.input';
import { CharacterMaxOrderByAggregateInput } from './character-max-order-by-aggregate.input';
import { CharacterMinOrderByAggregateInput } from './character-min-order-by-aggregate.input';
import { CharacterSumOrderByAggregateInput } from './character-sum-order-by-aggregate.input';

@InputType()
export class CharacterOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vision?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weapon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    affiliation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rarity?: keyof typeof SortOrder;

    @Field(() => CharacterCountOrderByAggregateInput, {nullable:true})
    _count?: CharacterCountOrderByAggregateInput;

    @Field(() => CharacterAvgOrderByAggregateInput, {nullable:true})
    _avg?: CharacterAvgOrderByAggregateInput;

    @Field(() => CharacterMaxOrderByAggregateInput, {nullable:true})
    _max?: CharacterMaxOrderByAggregateInput;

    @Field(() => CharacterMinOrderByAggregateInput, {nullable:true})
    _min?: CharacterMinOrderByAggregateInput;

    @Field(() => CharacterSumOrderByAggregateInput, {nullable:true})
    _sum?: CharacterSumOrderByAggregateInput;
}
