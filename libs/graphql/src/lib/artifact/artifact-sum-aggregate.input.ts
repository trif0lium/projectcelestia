import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArtifactSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    maxRarity?: true;
}
