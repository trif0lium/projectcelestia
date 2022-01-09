import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterConstellationCreateWithoutCharacterInput } from './character-constellation-create-without-character.input';
import { CharacterConstellationCreateOrConnectWithoutCharacterInput } from './character-constellation-create-or-connect-without-character.input';
import { CharacterConstellationUpsertWithWhereUniqueWithoutCharacterInput } from './character-constellation-upsert-with-where-unique-without-character.input';
import { CharacterConstellationCreateManyCharacterInputEnvelope } from './character-constellation-create-many-character-input-envelope.input';
import { CharacterConstellationWhereUniqueInput } from './character-constellation-where-unique.input';
import { CharacterConstellationUpdateWithWhereUniqueWithoutCharacterInput } from './character-constellation-update-with-where-unique-without-character.input';
import { CharacterConstellationUpdateManyWithWhereWithoutCharacterInput } from './character-constellation-update-many-with-where-without-character.input';
import { CharacterConstellationScalarWhereInput } from './character-constellation-scalar-where.input';

@InputType()
export class CharacterConstellationUncheckedUpdateManyWithoutCharacterInput {

    @Field(() => [CharacterConstellationCreateWithoutCharacterInput], {nullable:true})
    create?: Array<CharacterConstellationCreateWithoutCharacterInput>;

    @Field(() => [CharacterConstellationCreateOrConnectWithoutCharacterInput], {nullable:true})
    connectOrCreate?: Array<CharacterConstellationCreateOrConnectWithoutCharacterInput>;

    @Field(() => [CharacterConstellationUpsertWithWhereUniqueWithoutCharacterInput], {nullable:true})
    upsert?: Array<CharacterConstellationUpsertWithWhereUniqueWithoutCharacterInput>;

    @Field(() => CharacterConstellationCreateManyCharacterInputEnvelope, {nullable:true})
    createMany?: CharacterConstellationCreateManyCharacterInputEnvelope;

    @Field(() => [CharacterConstellationWhereUniqueInput], {nullable:true})
    set?: Array<CharacterConstellationWhereUniqueInput>;

    @Field(() => [CharacterConstellationWhereUniqueInput], {nullable:true})
    disconnect?: Array<CharacterConstellationWhereUniqueInput>;

    @Field(() => [CharacterConstellationWhereUniqueInput], {nullable:true})
    delete?: Array<CharacterConstellationWhereUniqueInput>;

    @Field(() => [CharacterConstellationWhereUniqueInput], {nullable:true})
    connect?: Array<CharacterConstellationWhereUniqueInput>;

    @Field(() => [CharacterConstellationUpdateWithWhereUniqueWithoutCharacterInput], {nullable:true})
    update?: Array<CharacterConstellationUpdateWithWhereUniqueWithoutCharacterInput>;

    @Field(() => [CharacterConstellationUpdateManyWithWhereWithoutCharacterInput], {nullable:true})
    updateMany?: Array<CharacterConstellationUpdateManyWithWhereWithoutCharacterInput>;

    @Field(() => [CharacterConstellationScalarWhereInput], {nullable:true})
    deleteMany?: Array<CharacterConstellationScalarWhereInput>;
}
