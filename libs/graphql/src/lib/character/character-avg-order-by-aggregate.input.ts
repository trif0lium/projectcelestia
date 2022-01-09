import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CharacterAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    rarity?: keyof typeof SortOrder;
}