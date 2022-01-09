import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentWhereUniqueInput } from './character-skill-talent-where-unique.input';
import { CharacterSkillTalentUpdateWithoutCharacterInput } from './character-skill-talent-update-without-character.input';

@InputType()
export class CharacterSkillTalentUpdateWithWhereUniqueWithoutCharacterInput {

    @Field(() => CharacterSkillTalentWhereUniqueInput, {nullable:false})
    where!: CharacterSkillTalentWhereUniqueInput;

    @Field(() => CharacterSkillTalentUpdateWithoutCharacterInput, {nullable:false})
    data!: CharacterSkillTalentUpdateWithoutCharacterInput;
}
