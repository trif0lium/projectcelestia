import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtifactWhereUniqueInput } from './artifact-where-unique.input';
import { ArtifactCreateInput } from './artifact-create.input';
import { ArtifactUpdateInput } from './artifact-update.input';

@ArgsType()
export class UpsertOneArtifactArgs {

    @Field(() => ArtifactWhereUniqueInput, {nullable:false})
    where!: ArtifactWhereUniqueInput;

    @Field(() => ArtifactCreateInput, {nullable:false})
    create!: ArtifactCreateInput;

    @Field(() => ArtifactUpdateInput, {nullable:false})
    update!: ArtifactUpdateInput;
}
