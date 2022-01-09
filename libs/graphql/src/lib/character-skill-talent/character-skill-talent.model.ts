import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Character } from '../character/character.model';
import { CharacterSkillTalentType } from '../prisma/character-skill-talent-type.enum';

@ObjectType()
export class CharacterSkillTalent {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    characterId!: string;

    @Field(() => Character, {nullable:false})
    character?: Character;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unlock!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => CharacterSkillTalentType, {nullable:false,defaultValue:'NORMAL_ATTACK'})
    type!: keyof typeof CharacterSkillTalentType;
}
