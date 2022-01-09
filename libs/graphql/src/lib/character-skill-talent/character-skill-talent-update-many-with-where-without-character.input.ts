import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentScalarWhereInput } from './character-skill-talent-scalar-where.input';
import { CharacterSkillTalentUpdateManyMutationInput } from './character-skill-talent-update-many-mutation.input';

@InputType()
export class CharacterSkillTalentUpdateManyWithWhereWithoutCharacterInput {

    @Field(() => CharacterSkillTalentScalarWhereInput, {nullable:false})
    where!: CharacterSkillTalentScalarWhereInput;

    @Field(() => CharacterSkillTalentUpdateManyMutationInput, {nullable:false})
    data!: CharacterSkillTalentUpdateManyMutationInput;
}
