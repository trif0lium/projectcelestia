import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacterPassiveTalentCountAggregate } from './character-passive-talent-count-aggregate.output';
import { CharacterPassiveTalentAvgAggregate } from './character-passive-talent-avg-aggregate.output';
import { CharacterPassiveTalentSumAggregate } from './character-passive-talent-sum-aggregate.output';
import { CharacterPassiveTalentMinAggregate } from './character-passive-talent-min-aggregate.output';
import { CharacterPassiveTalentMaxAggregate } from './character-passive-talent-max-aggregate.output';

@ObjectType()
export class AggregateCharacterPassiveTalent {

    @Field(() => CharacterPassiveTalentCountAggregate, {nullable:true})
    _count?: CharacterPassiveTalentCountAggregate;

    @Field(() => CharacterPassiveTalentAvgAggregate, {nullable:true})
    _avg?: CharacterPassiveTalentAvgAggregate;

    @Field(() => CharacterPassiveTalentSumAggregate, {nullable:true})
    _sum?: CharacterPassiveTalentSumAggregate;

    @Field(() => CharacterPassiveTalentMinAggregate, {nullable:true})
    _min?: CharacterPassiveTalentMinAggregate;

    @Field(() => CharacterPassiveTalentMaxAggregate, {nullable:true})
    _max?: CharacterPassiveTalentMaxAggregate;
}
