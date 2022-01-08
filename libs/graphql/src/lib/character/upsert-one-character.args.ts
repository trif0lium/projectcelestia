import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { CharacterCreateInput } from './character-create.input';
import { CharacterUpdateInput } from './character-update.input';

@ArgsType()
export class UpsertOneCharacterArgs {

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    where!: CharacterWhereUniqueInput;

    @Field(() => CharacterCreateInput, {nullable:false})
    create!: CharacterCreateInput;

    @Field(() => CharacterUpdateInput, {nullable:false})
    update!: CharacterUpdateInput;
}
