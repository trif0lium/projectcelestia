import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterCreateWithoutConstellationsInput } from './character-create-without-constellations.input';
import { CharacterCreateOrConnectWithoutConstellationsInput } from './character-create-or-connect-without-constellations.input';
import { CharacterUpsertWithoutConstellationsInput } from './character-upsert-without-constellations.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { CharacterUpdateWithoutConstellationsInput } from './character-update-without-constellations.input';

@InputType()
export class CharacterUpdateOneRequiredWithoutConstellationsInput {

    @Field(() => CharacterCreateWithoutConstellationsInput, {nullable:true})
    create?: CharacterCreateWithoutConstellationsInput;

    @Field(() => CharacterCreateOrConnectWithoutConstellationsInput, {nullable:true})
    connectOrCreate?: CharacterCreateOrConnectWithoutConstellationsInput;

    @Field(() => CharacterUpsertWithoutConstellationsInput, {nullable:true})
    upsert?: CharacterUpsertWithoutConstellationsInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    connect?: CharacterWhereUniqueInput;

    @Field(() => CharacterUpdateWithoutConstellationsInput, {nullable:true})
    update?: CharacterUpdateWithoutConstellationsInput;
}
