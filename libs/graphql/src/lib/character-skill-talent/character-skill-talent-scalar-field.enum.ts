import { registerEnumType } from '@nestjs/graphql';

export enum CharacterSkillTalentScalarFieldEnum {
    id = "id",
    characterId = "characterId",
    name = "name",
    unlock = "unlock",
    description = "description",
    type = "type"
}


registerEnumType(CharacterSkillTalentScalarFieldEnum, { name: 'CharacterSkillTalentScalarFieldEnum', description: undefined })
