import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterConstellation } from '../character-constellation/character-constellation.model';
import { CharacterPassiveTalent } from '../character-passive-talent/character-passive-talent.model';
import { CharacterSkillTalent } from '../character-skill-talent/character-skill-talent.model';
import { CharacterCount } from './character-count.output';

@ObjectType()
export class Character {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    vision!: string;

    @Field(() => String, {nullable:false})
    weapon!: string;

    @Field(() => String, {nullable:false})
    affiliation!: string;

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => [CharacterConstellation], {nullable:true})
    constellations?: Array<CharacterConstellation>;

    @Field(() => [CharacterPassiveTalent], {nullable:true})
    passiveTalents?: Array<CharacterPassiveTalent>;

    @Field(() => [CharacterSkillTalent], {nullable:true})
    skillTalents?: Array<CharacterSkillTalent>;

    @Field(() => CharacterCount, {nullable:false})
    _count?: CharacterCount;
}
