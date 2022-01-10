import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtifactWhereUniqueInput } from './artifact-where-unique.input';

@ArgsType()
export class DeleteOneArtifactArgs {

    @Field(() => ArtifactWhereUniqueInput, {nullable:false})
    where!: ArtifactWhereUniqueInput;
}
