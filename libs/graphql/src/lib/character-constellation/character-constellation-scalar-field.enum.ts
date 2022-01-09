import { registerEnumType } from '@nestjs/graphql';

export enum CharacterConstellationScalarFieldEnum {
    id = "id",
    name = "name",
    unlock = "unlock",
    description = "description",
    level = "level"
}


registerEnumType(CharacterConstellationScalarFieldEnum, { name: 'CharacterConstellationScalarFieldEnum', description: undefined })
