import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtifactCreateInput } from './artifact-create.input';

@ArgsType()
export class CreateOneArtifactArgs {

    @Field(() => ArtifactCreateInput, {nullable:false})
    data!: ArtifactCreateInput;
}
