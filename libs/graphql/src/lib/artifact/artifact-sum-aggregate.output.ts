import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArtifactSumAggregate {

    @Field(() => Int, {nullable:true})
    maxRarity?: number;
}
