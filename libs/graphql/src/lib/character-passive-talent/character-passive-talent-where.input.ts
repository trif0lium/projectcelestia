import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { CharacterRelationFilter } from '../character/character-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class CharacterPassiveTalentWhereInput {

    @Field(() => [CharacterPassiveTalentWhereInput], {nullable:true})
    AND?: Array<CharacterPassiveTalentWhereInput>;

    @Field(() => [CharacterPassiveTalentWhereInput], {nullable:true})
    OR?: Array<CharacterPassiveTalentWhereInput>;

    @Field(() => [CharacterPassiveTalentWhereInput], {nullable:true})
    NOT?: Array<CharacterPassiveTalentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    characterId?: StringFilter;

    @Field(() => CharacterRelationFilter, {nullable:true})
    character?: CharacterRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    unlock?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    level?: IntFilter;
}
