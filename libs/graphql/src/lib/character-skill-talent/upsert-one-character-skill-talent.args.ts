import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterSkillTalentWhereUniqueInput } from './character-skill-talent-where-unique.input';
import { CharacterSkillTalentCreateInput } from './character-skill-talent-create.input';
import { CharacterSkillTalentUpdateInput } from './character-skill-talent-update.input';

@ArgsType()
export class UpsertOneCharacterSkillTalentArgs {

    @Field(() => CharacterSkillTalentWhereUniqueInput, {nullable:false})
    where!: CharacterSkillTalentWhereUniqueInput;

    @Field(() => CharacterSkillTalentCreateInput, {nullable:false})
    create!: CharacterSkillTalentCreateInput;

    @Field(() => CharacterSkillTalentUpdateInput, {nullable:false})
    update!: CharacterSkillTalentUpdateInput;
}
