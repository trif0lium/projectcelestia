import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class CharacterConstellationScalarWhereWithAggregatesInput {

    @Field(() => [CharacterConstellationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CharacterConstellationScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterConstellationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CharacterConstellationScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterConstellationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CharacterConstellationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    unlock?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    level?: IntWithAggregatesFilter;
}
