import { registerEnumType } from '@nestjs/graphql';

export enum CharacterPassiveTalentScalarFieldEnum {
    id = "id",
    characterId = "characterId",
    name = "name",
    unlock = "unlock",
    description = "description",
    level = "level"
}


registerEnumType(CharacterPassiveTalentScalarFieldEnum, { name: 'CharacterPassiveTalentScalarFieldEnum', description: undefined })
