import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterUpdateWithoutSkillTalentsInput } from './character-update-without-skill-talents.input';
import { CharacterCreateWithoutSkillTalentsInput } from './character-create-without-skill-talents.input';

@InputType()
export class CharacterUpsertWithoutSkillTalentsInput {

    @Field(() => CharacterUpdateWithoutSkillTalentsInput, {nullable:false})
    update!: CharacterUpdateWithoutSkillTalentsInput;

    @Field(() => CharacterCreateWithoutSkillTalentsInput, {nullable:false})
    create!: CharacterCreateWithoutSkillTalentsInput;
}
