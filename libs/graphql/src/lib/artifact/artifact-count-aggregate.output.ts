import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArtifactCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    maxRarity!: number;

    @Field(() => Int, {nullable:false})
    twoPieceBonus!: number;

    @Field(() => Int, {nullable:false})
    fourPieceBonus!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
