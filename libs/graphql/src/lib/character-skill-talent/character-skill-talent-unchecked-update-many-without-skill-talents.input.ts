import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumCharacterSkillTalentTypeFieldUpdateOperationsInput } from '../prisma/enum-character-skill-talent-type-field-update-operations.input';

@InputType()
export class CharacterSkillTalentUncheckedUpdateManyWithoutSkillTalentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    unlock?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCharacterSkillTalentTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumCharacterSkillTalentTypeFieldUpdateOperationsInput;
}
