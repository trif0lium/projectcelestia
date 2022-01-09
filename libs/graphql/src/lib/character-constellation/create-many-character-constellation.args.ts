import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterConstellationCreateManyInput } from './character-constellation-create-many.input';

@ArgsType()
export class CreateManyCharacterConstellationArgs {

    @Field(() => [CharacterConstellationCreateManyInput], {nullable:false})
    data!: Array<CharacterConstellationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
