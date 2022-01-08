import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterCreateManyInput } from './character-create-many.input';

@ArgsType()
export class CreateManyCharacterArgs {

    @Field(() => [CharacterCreateManyInput], {nullable:false})
    data!: Array<CharacterCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
