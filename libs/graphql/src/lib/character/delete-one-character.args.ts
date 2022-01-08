import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterWhereUniqueInput } from './character-where-unique.input';

@ArgsType()
export class DeleteOneCharacterArgs {

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    where!: CharacterWhereUniqueInput;
}
