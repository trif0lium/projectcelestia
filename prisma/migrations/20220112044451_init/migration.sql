-- CreateTable
CREATE TABLE `Character` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `vision` VARCHAR(191) NOT NULL,
    `weapon` VARCHAR(191) NOT NULL,
    `affiliation` VARCHAR(191) NOT NULL,
    `rarity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterConstellation` (
    `id` VARCHAR(191) NOT NULL,
    `characterId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `unlock` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,

    INDEX `CharacterConstellation_characterId_idx`(`characterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterPassiveTalent` (
    `id` VARCHAR(191) NOT NULL,
    `characterId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `unlock` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,

    INDEX `CharacterPassiveTalent_characterId_idx`(`characterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterSkillTalent` (
    `id` VARCHAR(191) NOT NULL,
    `characterId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `unlock` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `type` ENUM('NORMAL_ATTACK', 'ELEMENTAL_SKILL', 'ELEMENTAL_BURST') NOT NULL DEFAULT 'NORMAL_ATTACK',

    INDEX `CharacterSkillTalent_characterId_idx`(`characterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artifact` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `maxRarity` INTEGER NOT NULL,
    `twoPieceBonus` VARCHAR(191) NOT NULL,
    `fourPieceBonus` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
