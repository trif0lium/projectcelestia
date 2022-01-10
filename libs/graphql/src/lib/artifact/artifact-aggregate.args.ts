import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtifactWhereInput } from './artifact-where.input';
import { ArtifactOrderByWithRelationInput } from './artifact-order-by-with-relation.input';
import { ArtifactWhereUniqueInput } from './artifact-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArtifactCountAggregateInput } from './artifact-count-aggregate.input';
import { ArtifactAvgAggregateInput } from './artifact-avg-aggregate.input';
import { ArtifactSumAggregateInput } from './artifact-sum-aggregate.input';
import { ArtifactMinAggregateInput } from './artifact-min-aggregate.input';
import { ArtifactMaxAggregateInput } from './artifact-max-aggregate.input';

@ArgsType()
export class ArtifactAggregateArgs {

    @Field(() => ArtifactWhereInput, {nullable:true})
    where?: ArtifactWhereInput;

    @Field(() => [ArtifactOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ArtifactOrderByWithRelationInput>;

    @Field(() => ArtifactWhereUniqueInput, {nullable:true})
    cursor?: ArtifactWhereUniqueInput;

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
