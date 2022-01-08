import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterUpdateManyMutationInput } from './character-update-many-mutation.input';
import { CharacterWhereInput } from './character-where.input';

@ArgsType()
export class UpdateManyCharacterArgs {

    @Field(() => CharacterUpdateManyMutationInput, {nullable:false})
    data!: CharacterUpdateManyMutationInput;

    @Field(() => CharacterWhereInput, {nullable:true})
    where?: CharacterWhereInput;
}
