import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacterSkillTalentCountAggregate } from './character-skill-talent-count-aggregate.output';
import { CharacterSkillTalentMinAggregate } from './character-skill-talent-min-aggregate.output';
import { CharacterSkillTalentMaxAggregate } from './character-skill-talent-max-aggregate.output';

@ObjectType()
export class AggregateCharacterSkillTalent {

    @Field(() => CharacterSkillTalentCountAggregate, {nullable:true})
    _count?: CharacterSkillTalentCountAggregate;

    @Field(() => CharacterSkillTalentMinAggregate, {nullable:true})
    _min?: CharacterSkillTalentMinAggregate;

    @Field(() => CharacterSkillTalentMaxAggregate, {nullable:true})
    _max?: CharacterSkillTalentMaxAggregate;
}
