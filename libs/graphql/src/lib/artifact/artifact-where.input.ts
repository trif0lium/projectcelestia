import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ArtifactWhereInput {

    @Field(() => [ArtifactWhereInput], {nullable:true})
    AND?: Array<ArtifactWhereInput>;

    @Field(() => [ArtifactWhereInput], {nullable:true})
    OR?: Array<ArtifactWhereInput>;

    @Field(() => [ArtifactWhereInput], {nullable:true})
    NOT?: Array<ArtifactWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    maxRarity?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    twoPieceBonus?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fourPieceBonus?: StringFilter;
}
