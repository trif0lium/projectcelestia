import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Artifact {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    maxRarity!: number;

    @Field(() => String, {nullable:false})
    twoPieceBonus!: string;

    @Field(() => String, {nullable:false})
    fourPieceBonus!: string;
}
