import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentWhereUniqueInput } from './character-skill-talent-where-unique.input';
import { CharacterSkillTalentUpdateWithoutCharacterInput } from './character-skill-talent-update-without-character.input';
import { CharacterSkillTalentCreateWithoutCharacterInput } from './character-skill-talent-create-without-character.input';

@InputType()
export class CharacterSkillTalentUpsertWithWhereUniqueWithoutCharacterInput {

    @Field(() => CharacterSkillTalentWhereUniqueInput, {nullable:false})
    where!: CharacterSkillTalentWhereUniqueInput;

    @Field(() => CharacterSkillTalentUpdateWithoutCharacterInput, {nullable:false})
    update!: CharacterSkillTalentUpdateWithoutCharacterInput;

    @Field(() => CharacterSkillTalentCreateWithoutCharacterInput, {nullable:false})
    create!: CharacterSkillTalentCreateWithoutCharacterInput;
}
