import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArtifactWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
