import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterWhereInput } from './character-where.input';

@ArgsType()
export class DeleteManyCharacterArgs {

    @Field(() => CharacterWhereInput, {nullable:true})
    where?: CharacterWhereInput;
}
