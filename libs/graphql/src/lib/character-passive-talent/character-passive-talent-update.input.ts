import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CharacterUpdateOneRequiredWithoutPassiveTalentsInput } from '../character/character-update-one-required-without-passive-talents.input';

@InputType()
export class CharacterPassiveTalentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    unlock?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    level?: IntFieldUpdateOperationsInput;

    @Field(() => CharacterUpdateOneRequiredWithoutPassiveTalentsInput, {nullable:true})
    character?: CharacterUpdateOneRequiredWithoutPassiveTalentsInput;
}
