import { registerEnumType } from '@nestjs/graphql';

export enum CharacterScalarFieldEnum {
    id = "id",
    name = "name",
    vision = "vision",
    weapon = "weapon",
    affiliation = "affiliation",
    rarity = "rarity"
}


registerEnumType(CharacterScalarFieldEnum, { name: 'CharacterScalarFieldEnum', description: undefined })
