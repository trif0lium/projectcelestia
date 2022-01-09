import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterSkillTalentWhereUniqueInput } from './character-skill-talent-where-unique.input';

@ArgsType()
export class DeleteOneCharacterSkillTalentArgs {

    @Field(() => CharacterSkillTalentWhereUniqueInput, {nullable:false})
    where!: CharacterSkillTalentWhereUniqueInput;
}
