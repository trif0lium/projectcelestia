import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterCreateInput } from './character-create.input';

@ArgsType()
export class CreateOneCharacterArgs {

    @Field(() => CharacterCreateInput, {nullable:false})
    data!: CharacterCreateInput;
}
