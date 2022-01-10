import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtifactWhereInput } from './artifact-where.input';
import { ArtifactOrderByWithAggregationInput } from './artifact-order-by-with-aggregation.input';
import { ArtifactScalarFieldEnum } from './artifact-scalar-field.enum';
import { ArtifactScalarWhereWithAggregatesInput } from './artifact-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ArtifactCountAggregateInput } from './artifact-count-aggregate.input';
import { ArtifactAvgAggregateInput } from './artifact-avg-aggregate.input';
import { ArtifactSumAggregateInput } from './artifact-sum-aggregate.input';
import { ArtifactMinAggregateInput } from './artifact-min-aggregate.input';
import { ArtifactMaxAggregateInput } from './artifact-max-aggregate.input';

@ArgsType()
export class ArtifactGroupByArgs {

    @Field(() => ArtifactWhereInput, {nullable:true})
    where?: ArtifactWhereInput;

    @Field(() => [ArtifactOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ArtifactOrderByWithAggregationInput>;

    @Field(() => [ArtifactScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ArtifactScalarFieldEnum>;

    @Field(() => ArtifactScalarWhereWithAggregatesInput, {nullable:true})
    having?: ArtifactScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ArtifactCountAggregateInput, {nullable:true})
    _count?: ArtifactCountAggregateInput;

    @Field(() => ArtifactAvgAggregateInput, {nullable:true})
    _avg?: ArtifactAvgAggregateInput;

    @Field(() => ArtifactSumAggregateInput, {nullable:true})
    _sum?: ArtifactSumAggregateInput;

    @Field(() => ArtifactMinAggregateInput, {nullable:true})
    _min?: ArtifactMinAggregateInput;

    @Field(() => ArtifactMaxAggregateInput, {nullable:true})
    _max?: ArtifactMaxAggregateInput;
}
