import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ArtifactScalarWhereWithAggregatesInput {

    @Field(() => [ArtifactScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ArtifactScalarWhereWithAggregatesInput>;

    @Field(() => [ArtifactScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ArtifactScalarWhereWithAggregatesInput>;

    @Field(() => [ArtifactScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ArtifactScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    maxRarity?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    twoPieceBonus?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fourPieceBonus?: StringWithAggregatesFilter;
}
