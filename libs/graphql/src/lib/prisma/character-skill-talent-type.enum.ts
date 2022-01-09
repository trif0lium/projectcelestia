import { registerEnumType } from '@nestjs/graphql';

export enum CharacterSkillTalentType {
    NORMAL_ATTACK = "NORMAL_ATTACK",
    ELEMENTAL_SKILL = "ELEMENTAL_SKILL",
    ELEMENTAL_BURST = "ELEMENTAL_BURST"
}


registerEnumType(CharacterSkillTalentType, { name: 'CharacterSkillTalentType', description: undefined })
