import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Character } from '../character/character.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CharacterConstellation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    characterId!: string;

    @Field(() => Character, {nullable:false})
    character?: Character;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unlock!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    level!: number;
}
