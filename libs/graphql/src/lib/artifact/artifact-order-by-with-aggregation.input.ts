import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArtifactCountOrderByAggregateInput } from './artifact-count-order-by-aggregate.input';
import { ArtifactAvgOrderByAggregateInput } from './artifact-avg-order-by-aggregate.input';
import { ArtifactMaxOrderByAggregateInput } from './artifact-max-order-by-aggregate.input';
import { ArtifactMinOrderByAggregateInput } from './artifact-min-order-by-aggregate.input';
import { ArtifactSumOrderByAggregateInput } from './artifact-sum-order-by-aggregate.input';

@InputType()
export class ArtifactOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxRarity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twoPieceBonus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fourPieceBonus?: keyof typeof SortOrder;

    @Field(() => ArtifactCountOrderByAggregateInput, {nullable:true})
    _count?: ArtifactCountOrderByAggregateInput;

    @Field(() => ArtifactAvgOrderByAggregateInput, {nullable:true})
    _avg?: ArtifactAvgOrderByAggregateInput;

    @Field(() => ArtifactMaxOrderByAggregateInput, {nullable:true})
    _max?: ArtifactMaxOrderByAggregateInput;

    @Field(() => ArtifactMinOrderByAggregateInput, {nullable:true})
    _min?: ArtifactMinOrderByAggregateInput;

    @Field(() => ArtifactSumOrderByAggregateInput, {nullable:true})
    _sum?: ArtifactSumOrderByAggregateInput;
}
