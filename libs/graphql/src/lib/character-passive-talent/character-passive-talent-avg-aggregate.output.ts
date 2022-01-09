import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CharacterPassiveTalentAvgAggregate {

    @Field(() => Float, {nullable:true})
    level?: number;
}
