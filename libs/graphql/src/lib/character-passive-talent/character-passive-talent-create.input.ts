import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterCreateNestedOneWithoutPassiveTalentsInput } from '../character/character-create-nested-one-without-passive-talents.input';

@InputType()
export class CharacterPassiveTalentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unlock!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    level!: number;

    @Field(() => CharacterCreateNestedOneWithoutPassiveTalentsInput, {nullable:false})
    character!: CharacterCreateNestedOneWithoutPassiveTalentsInput;
}
