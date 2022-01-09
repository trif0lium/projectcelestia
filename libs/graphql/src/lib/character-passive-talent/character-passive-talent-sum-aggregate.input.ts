import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharacterPassiveTalentSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    level?: true;
}
