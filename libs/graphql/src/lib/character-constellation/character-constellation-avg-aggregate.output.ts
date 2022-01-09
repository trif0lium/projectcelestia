import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CharacterConstellationAvgAggregate {

    @Field(() => Float, {nullable:true})
    level?: number;
}
