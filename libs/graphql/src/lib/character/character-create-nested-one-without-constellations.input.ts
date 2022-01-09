import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterCreateWithoutConstellationsInput } from './character-create-without-constellations.input';
import { CharacterCreateOrConnectWithoutConstellationsInput } from './character-create-or-connect-without-constellations.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';

@InputType()
export class CharacterCreateNestedOneWithoutConstellationsInput {

    @Field(() => CharacterCreateWithoutConstellationsInput, {nullable:true})
    create?: CharacterCreateWithoutConstellationsInput;

    @Field(() => CharacterCreateOrConnectWithoutConstellationsInput, {nullable:true})
    connectOrCreate?: CharacterCreateOrConnectWithoutConstellationsInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    connect?: CharacterWhereUniqueInput;
}
