import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtifactUpdateManyMutationInput } from './artifact-update-many-mutation.input';
import { ArtifactWhereInput } from './artifact-where.input';

@ArgsType()
export class UpdateManyArtifactArgs {

    @Field(() => ArtifactUpdateManyMutationInput, {nullable:false})
    data!: ArtifactUpdateManyMutationInput;

    @Field(() => ArtifactWhereInput, {nullable:true})
    where?: ArtifactWhereInput;
}
