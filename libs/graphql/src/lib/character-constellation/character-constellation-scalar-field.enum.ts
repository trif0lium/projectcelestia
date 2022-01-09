import { registerEnumType } from '@nestjs/graphql';

export enum CharacterConstellationScalarFieldEnum {
    id = "id",
    characterId = "characterId",
    name = "name",
    unlock = "unlock",
    description = "description",
    level = "level"
}


registerEnumType(CharacterConstellationScalarFieldEnum, { name: 'CharacterConstellationScalarFieldEnum', description: undefined })
