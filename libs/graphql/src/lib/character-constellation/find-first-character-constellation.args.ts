import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterConstellationWhereInput } from './character-constellation-where.input';
import { CharacterConstellationOrderByWithRelationInput } from './character-constellation-order-by-with-relation.input';
import { CharacterConstellationWhereUniqueInput } from './character-constellation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacterConstellationScalarFieldEnum } from './character-constellation-scalar-field.enum';

@ArgsType()
export class FindFirstCharacterConstellationArgs {

    @Field(() => CharacterConstellationWhereInput, {nullable:true})
    where?: CharacterConstellationWhereInput;

    @Field(() => [CharacterConstellationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterConstellationOrderByWithRelationInput>;

    @Field(() => CharacterConstellationWhereUniqueInput, {nullable:true})
    cursor?: CharacterConstellationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CharacterConstellationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CharacterConstellationScalarFieldEnum>;
}
