import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentCreateWithoutCharacterInput } from './character-skill-talent-create-without-character.input';
import { CharacterSkillTalentCreateOrConnectWithoutCharacterInput } from './character-skill-talent-create-or-connect-without-character.input';
import { CharacterSkillTalentUpsertWithWhereUniqueWithoutCharacterInput } from './character-skill-talent-upsert-with-where-unique-without-character.input';
import { CharacterSkillTalentCreateManyCharacterInputEnvelope } from './character-skill-talent-create-many-character-input-envelope.input';
import { CharacterSkillTalentWhereUniqueInput } from './character-skill-talent-where-unique.input';
import { CharacterSkillTalentUpdateWithWhereUniqueWithoutCharacterInput } from './character-skill-talent-update-with-where-unique-without-character.input';
import { CharacterSkillTalentUpdateManyWithWhereWithoutCharacterInput } from './character-skill-talent-update-many-with-where-without-character.input';
import { CharacterSkillTalentScalarWhereInput } from './character-skill-talent-scalar-where.input';

@InputType()
export class CharacterSkillTalentUncheckedUpdateManyWithoutCharacterInput {

    @Field(() => [CharacterSkillTalentCreateWithoutCharacterInput], {nullable:true})
    create?: Array<CharacterSkillTalentCreateWithoutCharacterInput>;

    @Field(() => [CharacterSkillTalentCreateOrConnectWithoutCharacterInput], {nullable:true})
    connectOrCreate?: Array<CharacterSkillTalentCreateOrConnectWithoutCharacterInput>;

    @Field(() => [CharacterSkillTalentUpsertWithWhereUniqueWithoutCharacterInput], {nullable:true})
    upsert?: Array<CharacterSkillTalentUpsertWithWhereUniqueWithoutCharacterInput>;

    @Field(() => CharacterSkillTalentCreateManyCharacterInputEnvelope, {nullable:true})
    createMany?: CharacterSkillTalentCreateManyCharacterInputEnvelope;

    @Field(() => [CharacterSkillTalentWhereUniqueInput], {nullable:true})
    set?: Array<CharacterSkillTalentWhereUniqueInput>;

    @Field(() => [CharacterSkillTalentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CharacterSkillTalentWhereUniqueInput>;

    @Field(() => [CharacterSkillTalentWhereUniqueInput], {nullable:true})
    delete?: Array<CharacterSkillTalentWhereUniqueInput>;

    @Field(() => [CharacterSkillTalentWhereUniqueInput], {nullable:true})
    connect?: Array<CharacterSkillTalentWhereUniqueInput>;

    @Field(() => [CharacterSkillTalentUpdateWithWhereUniqueWithoutCharacterInput], {nullable:true})
    update?: Array<CharacterSkillTalentUpdateWithWhereUniqueWithoutCharacterInput>;

    @Field(() => [CharacterSkillTalentUpdateManyWithWhereWithoutCharacterInput], {nullable:true})
    updateMany?: Array<CharacterSkillTalentUpdateManyWithWhereWithoutCharacterInput>;

    @Field(() => [CharacterSkillTalentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CharacterSkillTalentScalarWhereInput>;
}
