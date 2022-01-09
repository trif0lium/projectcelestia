import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentType } from './character-skill-talent-type.enum';

@InputType()
export class EnumCharacterSkillTalentTypeFieldUpdateOperationsInput {

    @Field(() => CharacterSkillTalentType, {nullable:true})
    set?: keyof typeof CharacterSkillTalentType;
}
