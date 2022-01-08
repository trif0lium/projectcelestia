import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CharacterMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    vision?: string;

    @Field(() => String, {nullable:true})
    weapon?: string;

    @Field(() => String, {nullable:true})
    affiliation?: string;

    @Field(() => Int, {nullable:true})
    rarity?: number;
}
