import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtifactCreateManyInput } from './artifact-create-many.input';

@ArgsType()
export class CreateManyArtifactArgs {

    @Field(() => [ArtifactCreateManyInput], {nullable:false})
    data!: Array<ArtifactCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
