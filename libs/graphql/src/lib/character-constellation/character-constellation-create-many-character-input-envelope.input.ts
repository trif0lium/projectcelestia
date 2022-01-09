import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterConstellationCreateManyCharacterInput } from './character-constellation-create-many-character.input';

@InputType()
export class CharacterConstellationCreateManyCharacterInputEnvelope {

    @Field(() => [CharacterConstellationCreateManyCharacterInput], {nullable:false})
    data!: Array<CharacterConstellationCreateManyCharacterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
