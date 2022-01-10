import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtifactUpdateInput } from './artifact-update.input';
import { ArtifactWhereUniqueInput } from './artifact-where-unique.input';

@ArgsType()
export class UpdateOneArtifactArgs {

    @Field(() => ArtifactUpdateInput, {nullable:false})
    data!: ArtifactUpdateInput;

    @Field(() => ArtifactWhereUniqueInput, {nullable:false})
    where!: ArtifactWhereUniqueInput;
}
