import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { CharacterCreateWithoutConstellationsInput } from './character-create-without-constellations.input';

@InputType()
export class CharacterCreateOrConnectWithoutConstellationsInput {

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    where!: CharacterWhereUniqueInput;

    @Field(() => CharacterCreateWithoutConstellationsInput, {nullable:false})
    create!: CharacterCreateWithoutConstellationsInput;
}
