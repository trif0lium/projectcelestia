import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CharacterPassiveTalentUncheckedUpdateManyWithoutCharacterInput } from '../character-passive-talent/character-passive-talent-unchecked-update-many-without-character.input';
import { CharacterSkillTalentUncheckedUpdateManyWithoutCharacterInput } from '../character-skill-talent/character-skill-talent-unchecked-update-many-without-character.input';

@InputType()
export class CharacterUncheckedUpdateWithoutConstellationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    vision?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    weapon?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    affiliation?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rarity?: IntFieldUpdateOperationsInput;

    @Field(() => CharacterPassiveTalentUncheckedUpdateManyWithoutCharacterInput, {nullable:true})
    passiveTalents?: CharacterPassiveTalentUncheckedUpdateManyWithoutCharacterInput;

    @Field(() => CharacterSkillTalentUncheckedUpdateManyWithoutCharacterInput, {nullable:true})
    skillTalents?: CharacterSkillTalentUncheckedUpdateManyWithoutCharacterInput;
}
