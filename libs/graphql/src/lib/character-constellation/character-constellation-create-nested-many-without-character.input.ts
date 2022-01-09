import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterConstellationCreateWithoutCharacterInput } from './character-constellation-create-without-character.input';
import { CharacterConstellationCreateOrConnectWithoutCharacterInput } from './character-constellation-create-or-connect-without-character.input';
import { CharacterConstellationCreateManyCharacterInputEnvelope } from './character-constellation-create-many-character-input-envelope.input';
import { CharacterConstellationWhereUniqueInput } from './character-constellation-where-unique.input';

@InputType()
export class CharacterConstellationCreateNestedManyWithoutCharacterInput {

    @Field(() => [CharacterConstellationCreateWithoutCharacterInput], {nullable:true})
    create?: Array<CharacterConstellationCreateWithoutCharacterInput>;

    @Field(() => [CharacterConstellationCreateOrConnectWithoutCharacterInput], {nullable:true})
    connectOrCreate?: Array<CharacterConstellationCreateOrConnectWithoutCharacterInput>;

    @Field(() => CharacterConstellationCreateManyCharacterInputEnvelope, {nullable:true})
    createMany?: CharacterConstellationCreateManyCharacterInputEnvelope;

    @Field(() => [CharacterConstellationWhereUniqueInput], {nullable:true})
    connect?: Array<CharacterConstellationWhereUniqueInput>;
}
