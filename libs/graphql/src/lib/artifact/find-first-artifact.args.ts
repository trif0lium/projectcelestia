import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtifactWhereInput } from './artifact-where.input';
import { ArtifactOrderByWithRelationInput } from './artifact-order-by-with-relation.input';
import { ArtifactWhereUniqueInput } from './artifact-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArtifactScalarFieldEnum } from './artifact-scalar-field.enum';

@ArgsType()
export class FindFirstArtifactArgs {

    @Field(() => ArtifactWhereInput, {nullable:true})
    where?: ArtifactWhereInput;

    @Field(() => [ArtifactOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ArtifactOrderByWithRelationInput>;

    @Field(() => ArtifactWhereUniqueInput, {nullable:true})
    cursor?: ArtifactWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ArtifactScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ArtifactScalarFieldEnum>;
}
