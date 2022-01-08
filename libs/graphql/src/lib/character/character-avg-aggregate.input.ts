import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharacterAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    rarity?: true;
}
