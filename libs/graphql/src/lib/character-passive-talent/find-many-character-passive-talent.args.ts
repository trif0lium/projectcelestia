import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterPassiveTalentWhereInput } from './character-passive-talent-where.input';
import { CharacterPassiveTalentOrderByWithRelationInput } from './character-passive-talent-order-by-with-relation.input';
import { CharacterPassiveTalentWhereUniqueInput } from './character-passive-talent-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacterPassiveTalentScalarFieldEnum } from './character-passive-talent-scalar-field.enum';

@ArgsType()
export class FindManyCharacterPassiveTalentArgs {

    @Field(() => CharacterPassiveTalentWhereInput, {nullable:true})
    where?: CharacterPassiveTalentWhereInput;

    @Field(() => [CharacterPassiveTalentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterPassiveTalentOrderByWithRelationInput>;

    @Field(() => CharacterPassiveTalentWhereUniqueInput, {nullable:true})
    cursor?: CharacterPassiveTalentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CharacterPassiveTalentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CharacterPassiveTalentScalarFieldEnum>;
}
