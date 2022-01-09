import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ArtifactCountAggregate } from './artifact-count-aggregate.output';
import { ArtifactAvgAggregate } from './artifact-avg-aggregate.output';
import { ArtifactSumAggregate } from './artifact-sum-aggregate.output';
import { ArtifactMinAggregate } from './artifact-min-aggregate.output';
import { ArtifactMaxAggregate } from './artifact-max-aggregate.output';

@ObjectType()
export class ArtifactGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    maxRarity!: number;

    @Field(() => String, {nullable:false})
    twoPieceBonus!: string;

    @Field(() => String, {nullable:false})
    fourPieceBonus!: string;

    @Field(() => ArtifactCountAggregate, {nullable:true})
    _count?: ArtifactCountAggregate;

    @Field(() => ArtifactAvgAggregate, {nullable:true})
    _avg?: ArtifactAvgAggregate;

    @Field(() => ArtifactSumAggregate, {nullable:true})
    _sum?: ArtifactSumAggregate;

    @Field(() => ArtifactMinAggregate, {nullable:true})
    _min?: ArtifactMinAggregate;

    @Field(() => ArtifactMaxAggregate, {nullable:true})
    _max?: ArtifactMaxAggregate;
}
