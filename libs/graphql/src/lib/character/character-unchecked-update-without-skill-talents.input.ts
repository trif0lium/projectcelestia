import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CharacterConstellationUncheckedUpdateManyWithoutCharacterInput } from '../character-constellation/character-constellation-unchecked-update-many-without-character.input';
import { CharacterPassiveTalentUncheckedUpdateManyWithoutCharacterInput } from '../character-passive-talent/character-passive-talent-unchecked-update-many-without-character.input';

@InputType()
export class CharacterUncheckedUpdateWithoutSkillTalentsInput {

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

    @Field(() => CharacterConstellationUncheckedUpdateManyWithoutCharacterInput, {nullable:true})
    constellations?: CharacterConstellationUncheckedUpdateManyWithoutCharacterInput;

    @Field(() => CharacterPassiveTalentUncheckedUpdateManyWithoutCharacterInput, {nullable:true})
    passiveTalents?: CharacterPassiveTalentUncheckedUpdateManyWithoutCharacterInput;
}
