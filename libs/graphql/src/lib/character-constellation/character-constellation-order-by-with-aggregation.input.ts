import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharacterConstellationCountOrderByAggregateInput } from './character-constellation-count-order-by-aggregate.input';
import { CharacterConstellationAvgOrderByAggregateInput } from './character-constellation-avg-order-by-aggregate.input';
import { CharacterConstellationMaxOrderByAggregateInput } from './character-constellation-max-order-by-aggregate.input';
import { CharacterConstellationMinOrderByAggregateInput } from './character-constellation-min-order-by-aggregate.input';
import { CharacterConstellationSumOrderByAggregateInput } from './character-constellation-sum-order-by-aggregate.input';

@InputType()
export class CharacterConstellationOrderByWithAggregationInput {

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

    @Field(() => CharacterConstellationCountOrderByAggregateInput, {nullable:true})
    _count?: CharacterConstellationCountOrderByAggregateInput;

    @Field(() => CharacterConstellationAvgOrderByAggregateInput, {nullable:true})
    _avg?: CharacterConstellationAvgOrderByAggregateInput;

    @Field(() => CharacterConstellationMaxOrderByAggregateInput, {nullable:true})
    _max?: CharacterConstellationMaxOrderByAggregateInput;

    @Field(() => CharacterConstellationMinOrderByAggregateInput, {nullable:true})
    _min?: CharacterConstellationMinOrderByAggregateInput;

    @Field(() => CharacterConstellationSumOrderByAggregateInput, {nullable:true})
    _sum?: CharacterConstellationSumOrderByAggregateInput;
}
