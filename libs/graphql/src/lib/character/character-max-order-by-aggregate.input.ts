import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CharacterMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vision?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weapon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    affiliation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rarity?: keyof typeof SortOrder;
}
