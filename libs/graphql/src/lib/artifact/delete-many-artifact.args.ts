import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtifactWhereInput } from './artifact-where.input';

@ArgsType()
export class DeleteManyArtifactArgs {

    @Field(() => ArtifactWhereInput, {nullable:true})
    where?: ArtifactWhereInput;
}
