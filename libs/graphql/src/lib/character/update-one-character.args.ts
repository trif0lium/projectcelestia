import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterUpdateInput } from './character-update.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';

@ArgsType()
export class UpdateOneCharacterArgs {

    @Field(() => CharacterUpdateInput, {nullable:false})
    data!: CharacterUpdateInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    where!: CharacterWhereUniqueInput;
}
