import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterCreateNestedOneWithoutConstellationsInput } from '../character/character-create-nested-one-without-constellations.input';

@InputType()
export class CharacterConstellationCreateInput {

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

    @Field(() => CharacterCreateNestedOneWithoutConstellationsInput, {nullable:false})
    character!: CharacterCreateNestedOneWithoutConstellationsInput;
}
