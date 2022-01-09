import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArtifactCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    maxRarity?: true;

    @Field(() => Boolean, {nullable:true})
    twoPieceBonus?: true;

    @Field(() => Boolean, {nullable:true})
    fourPieceBonus?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
