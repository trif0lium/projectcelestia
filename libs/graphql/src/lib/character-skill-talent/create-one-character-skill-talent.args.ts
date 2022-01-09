import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterSkillTalentCreateInput } from './character-skill-talent-create.input';

@ArgsType()
export class CreateOneCharacterSkillTalentArgs {

    @Field(() => CharacterSkillTalentCreateInput, {nullable:false})
    data!: CharacterSkillTalentCreateInput;
}
