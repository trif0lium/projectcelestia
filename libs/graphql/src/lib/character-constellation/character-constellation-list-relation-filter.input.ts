import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterConstellationWhereInput } from './character-constellation-where.input';

@InputType()
export class CharacterConstellationListRelationFilter {

    @Field(() => CharacterConstellationWhereInput, {nullable:true})
    every?: CharacterConstellationWhereInput;

    @Field(() => CharacterConstellationWhereInput, {nullable:true})
    some?: CharacterConstellationWhereInput;

    @Field(() => CharacterConstellationWhereInput, {nullable:true})
    none?: CharacterConstellationWhereInput;
}
