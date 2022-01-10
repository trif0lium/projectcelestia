import { registerEnumType } from '@nestjs/graphql';

export enum ArtifactScalarFieldEnum {
    id = "id",
    name = "name",
    maxRarity = "maxRarity",
    twoPieceBonus = "twoPieceBonus",
    fourPieceBonus = "fourPieceBonus"
}


registerEnumType(ArtifactScalarFieldEnum, { name: 'ArtifactScalarFieldEnum', description: undefined })
