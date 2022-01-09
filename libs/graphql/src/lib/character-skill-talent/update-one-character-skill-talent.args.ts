import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterSkillTalentUpdateInput } from './character-skill-talent-update.input';
import { CharacterSkillTalentWhereUniqueInput } from './character-skill-talent-where-unique.input';

@ArgsType()
export class UpdateOneCharacterSkillTalentArgs {

    @Field(() => CharacterSkillTalentUpdateInput, {nullable:false})
    data!: CharacterSkillTalentUpdateInput;

    @Field(() => CharacterSkillTalentWhereUniqueInput, {nullable:false})
    where!: CharacterSkillTalentWhereUniqueInput;
}
