import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterPassiveTalentCreateWithoutCharacterInput } from './character-passive-talent-create-without-character.input';
import { CharacterPassiveTalentCreateOrConnectWithoutCharacterInput } from './character-passive-talent-create-or-connect-without-character.input';
import { CharacterPassiveTalentUpsertWithWhereUniqueWithoutCharacterInput } from './character-passive-talent-upsert-with-where-unique-without-character.input';
import { CharacterPassiveTalentCreateManyCharacterInputEnvelope } from './character-passive-talent-create-many-character-input-envelope.input';
import { CharacterPassiveTalentWhereUniqueInput } from './character-passive-talent-where-unique.input';
import { CharacterPassiveTalentUpdateWithWhereUniqueWithoutCharacterInput } from './character-passive-talent-update-with-where-unique-without-character.input';
import { CharacterPassiveTalentUpdateManyWithWhereWithoutCharacterInput } from './character-passive-talent-update-many-with-where-without-character.input';
import { CharacterPassiveTalentScalarWhereInput } from './character-passive-talent-scalar-where.input';

@InputType()
export class CharacterPassiveTalentUpdateManyWithoutCharacterInput {

    @Field(() => [CharacterPassiveTalentCreateWithoutCharacterInput], {nullable:true})
    create?: Array<CharacterPassiveTalentCreateWithoutCharacterInput>;

    @Field(() => [CharacterPassiveTalentCreateOrConnectWithoutCharacterInput], {nullable:true})
    connectOrCreate?: Array<CharacterPassiveTalentCreateOrConnectWithoutCharacterInput>;

    @Field(() => [CharacterPassiveTalentUpsertWithWhereUniqueWithoutCharacterInput], {nullable:true})
    upsert?: Array<CharacterPassiveTalentUpsertWithWhereUniqueWithoutCharacterInput>;

    @Field(() => CharacterPassiveTalentCreateManyCharacterInputEnvelope, {nullable:true})
    createMany?: CharacterPassiveTalentCreateManyCharacterInputEnvelope;

    @Field(() => [CharacterPassiveTalentWhereUniqueInput], {nullable:true})
    set?: Array<CharacterPassiveTalentWhereUniqueInput>;

    @Field(() => [CharacterPassiveTalentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CharacterPassiveTalentWhereUniqueInput>;

    @Field(() => [CharacterPassiveTalentWhereUniqueInput], {nullable:true})
    delete?: Array<CharacterPassiveTalentWhereUniqueInput>;

    @Field(() => [CharacterPassiveTalentWhereUniqueInput], {nullable:true})
    connect?: Array<CharacterPassiveTalentWhereUniqueInput>;

    @Field(() => [CharacterPassiveTalentUpdateWithWhereUniqueWithoutCharacterInput], {nullable:true})
    update?: Array<CharacterPassiveTalentUpdateWithWhereUniqueWithoutCharacterInput>;

    @Field(() => [CharacterPassiveTalentUpdateManyWithWhereWithoutCharacterInput], {nullable:true})
    updateMany?: Array<CharacterPassiveTalentUpdateManyWithWhereWithoutCharacterInput>;

    @Field(() => [CharacterPassiveTalentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CharacterPassiveTalentScalarWhereInput>;
}
