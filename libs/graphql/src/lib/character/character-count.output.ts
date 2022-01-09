import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CharacterCount {

    @Field(() => Int, {nullable:false})
    constellations!: number;

    @Field(() => Int, {nullable:false})
    passiveTalents!: number;

    @Field(() => Int, {nullable:false})
    skillTalents!: number;
}
