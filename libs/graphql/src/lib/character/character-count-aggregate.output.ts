import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CharacterCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    vision!: number;

    @Field(() => Int, {nullable:false})
    weapon!: number;

    @Field(() => Int, {nullable:false})
    affiliation!: number;

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
