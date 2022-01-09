import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentWhereUniqueInput } from './character-skill-talent-where-unique.input';
import { CharacterSkillTalentCreateWithoutCharacterInput } from './character-skill-talent-create-without-character.input';

@InputType()
export class CharacterSkillTalentCreateOrConnectWithoutCharacterInput {

    @Field(() => CharacterSkillTalentWhereUniqueInput, {nullable:false})
    where!: CharacterSkillTalentWhereUniqueInput;

    @Field(() => CharacterSkillTalentCreateWithoutCharacterInput, {nullable:false})
    create!: CharacterSkillTalentCreateWithoutCharacterInput;
}
