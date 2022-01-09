import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterSkillTalentUpdateManyMutationInput } from './character-skill-talent-update-many-mutation.input';
import { CharacterSkillTalentWhereInput } from './character-skill-talent-where.input';

@ArgsType()
export class UpdateManyCharacterSkillTalentArgs {

    @Field(() => CharacterSkillTalentUpdateManyMutationInput, {nullable:false})
    data!: CharacterSkillTalentUpdateManyMutationInput;

    @Field(() => CharacterSkillTalentWhereInput, {nullable:true})
    where?: CharacterSkillTalentWhereInput;
}
