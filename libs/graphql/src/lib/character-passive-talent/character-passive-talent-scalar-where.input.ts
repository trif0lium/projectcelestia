import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class CharacterPassiveTalentScalarWhereInput {

    @Field(() => [CharacterPassiveTalentScalarWhereInput], {nullable:true})
    AND?: Array<CharacterPassiveTalentScalarWhereInput>;

    @Field(() => [CharacterPassiveTalentScalarWhereInput], {nullable:true})
    OR?: Array<CharacterPassiveTalentScalarWhereInput>;

    @Field(() => [CharacterPassiveTalentScalarWhereInput], {nullable:true})
    NOT?: Array<CharacterPassiveTalentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    characterId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    unlock?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    level?: IntFilter;
}
