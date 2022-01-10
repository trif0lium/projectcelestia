import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArtifactAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    maxRarity?: true;
}
