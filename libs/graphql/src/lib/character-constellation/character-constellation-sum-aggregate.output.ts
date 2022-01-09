import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CharacterConstellationSumAggregate {

    @Field(() => Int, {nullable:true})
    level?: number;
}
