import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacterSkillTalentType } from '../prisma/character-skill-talent-type.enum';
import { CharacterSkillTalentCountAggregate } from './character-skill-talent-count-aggregate.output';
import { CharacterSkillTalentMinAggregate } from './character-skill-talent-min-aggregate.output';
import { CharacterSkillTalentMaxAggregate } from './character-skill-talent-max-aggregate.output';

@ObjectType()
export class CharacterSkillTalentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    characterId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unlock!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => CharacterSkillTalentType, {nullable:false})
    type!: keyof typeof CharacterSkillTalentType;

    @Field(() => CharacterSkillTalentCountAggregate, {nullable:true})
    _count?: CharacterSkillTalentCountAggregate;

    @Field(() => CharacterSkillTalentMinAggregate, {nullable:true})
    _min?: CharacterSkillTalentMinAggregate;

    @Field(() => CharacterSkillTalentMaxAggregate, {nullable:true})
    _max?: CharacterSkillTalentMaxAggregate;
}
