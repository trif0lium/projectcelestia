import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArtifactMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    maxRarity?: number;

    @Field(() => String, {nullable:true})
    twoPieceBonus?: string;

    @Field(() => String, {nullable:true})
    fourPieceBonus?: string;
}
