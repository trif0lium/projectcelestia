import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArtifactSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    maxRarity?: keyof typeof SortOrder;
}
