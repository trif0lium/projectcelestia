import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class CharacterPassiveTalentScalarWhereWithAggregatesInput {

    @Field(() => [CharacterPassiveTalentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CharacterPassiveTalentScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterPassiveTalentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CharacterPassiveTalentScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterPassiveTalentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CharacterPassiveTalentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    characterId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    unlock?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    level?: IntWithAggregatesFilter;
}
