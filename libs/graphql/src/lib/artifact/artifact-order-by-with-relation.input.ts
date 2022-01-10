import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArtifactOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxRarity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twoPieceBonus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fourPieceBonus?: keyof typeof SortOrder;
}
