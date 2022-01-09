import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterUpdateWithoutConstellationsInput } from './character-update-without-constellations.input';
import { CharacterCreateWithoutConstellationsInput } from './character-create-without-constellations.input';

@InputType()
export class CharacterUpsertWithoutConstellationsInput {

    @Field(() => CharacterUpdateWithoutConstellationsInput, {nullable:false})
    update!: CharacterUpdateWithoutConstellationsInput;

    @Field(() => CharacterCreateWithoutConstellationsInput, {nullable:false})
    create!: CharacterCreateWithoutConstellationsInput;
}
