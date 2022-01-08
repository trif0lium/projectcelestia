import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharacterMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    vision?: true;

    @Field(() => Boolean, {nullable:true})
    weapon?: true;

    @Field(() => Boolean, {nullable:true})
    affiliation?: true;

    @Field(() => Boolean, {nullable:true})
    rarity?: true;
}
