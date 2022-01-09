import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CharacterConstellationUpdateManyWithoutCharacterInput } from '../character-constellation/character-constellation-update-many-without-character.input';
import { CharacterPassiveTalentUpdateManyWithoutCharacterInput } from '../character-passive-talent/character-passive-talent-update-many-without-character.input';
import { CharacterSkillTalentUpdateManyWithoutCharacterInput } from '../character-skill-talent/character-skill-talent-update-many-without-character.input';

@InputType()
export class CharacterUpdateInput {

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

    @Field(() => CharacterConstellationUpdateManyWithoutCharacterInput, {nullable:true})
    constellations?: CharacterConstellationUpdateManyWithoutCharacterInput;

    @Field(() => CharacterPassiveTalentUpdateManyWithoutCharacterInput, {nullable:true})
    passiveTalents?: CharacterPassiveTalentUpdateManyWithoutCharacterInput;

    @Field(() => CharacterSkillTalentUpdateManyWithoutCharacterInput, {nullable:true})
    skillTalents?: CharacterSkillTalentUpdateManyWithoutCharacterInput;
}
