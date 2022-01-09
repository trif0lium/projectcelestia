import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterSkillTalentWhereInput } from './character-skill-talent-where.input';

@ArgsType()
export class DeleteManyCharacterSkillTalentArgs {

    @Field(() => CharacterSkillTalentWhereInput, {nullable:true})
    where?: CharacterSkillTalentWhereInput;
}
