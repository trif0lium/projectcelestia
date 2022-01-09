import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterConstellationCreateInput } from './character-constellation-create.input';

@ArgsType()
export class CreateOneCharacterConstellationArgs {

    @Field(() => CharacterConstellationCreateInput, {nullable:false})
    data!: CharacterConstellationCreateInput;
}
