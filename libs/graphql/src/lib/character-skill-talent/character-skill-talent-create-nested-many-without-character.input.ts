import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentCreateWithoutCharacterInput } from './character-skill-talent-create-without-character.input';
import { CharacterSkillTalentCreateOrConnectWithoutCharacterInput } from './character-skill-talent-create-or-connect-without-character.input';
import { CharacterSkillTalentCreateManyCharacterInputEnvelope } from './character-skill-talent-create-many-character-input-envelope.input';
import { CharacterSkillTalentWhereUniqueInput } from './character-skill-talent-where-unique.input';

@InputType()
export class CharacterSkillTalentCreateNestedManyWithoutCharacterInput {

    @Field(() => [CharacterSkillTalentCreateWithoutCharacterInput], {nullable:true})
    create?: Array<CharacterSkillTalentCreateWithoutCharacterInput>;

    @Field(() => [CharacterSkillTalentCreateOrConnectWithoutCharacterInput], {nullable:true})
    connectOrCreate?: Array<CharacterSkillTalentCreateOrConnectWithoutCharacterInput>;

    @Field(() => CharacterSkillTalentCreateManyCharacterInputEnvelope, {nullable:true})
    createMany?: CharacterSkillTalentCreateManyCharacterInputEnvelope;

    @Field(() => [CharacterSkillTalentWhereUniqueInput], {nullable:true})
    connect?: Array<CharacterSkillTalentWhereUniqueInput>;
}
