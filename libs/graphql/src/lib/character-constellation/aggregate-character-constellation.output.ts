import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacterConstellationCountAggregate } from './character-constellation-count-aggregate.output';
import { CharacterConstellationAvgAggregate } from './character-constellation-avg-aggregate.output';
import { CharacterConstellationSumAggregate } from './character-constellation-sum-aggregate.output';
import { CharacterConstellationMinAggregate } from './character-constellation-min-aggregate.output';
import { CharacterConstellationMaxAggregate } from './character-constellation-max-aggregate.output';

@ObjectType()
export class AggregateCharacterConstellation {

    @Field(() => CharacterConstellationCountAggregate, {nullable:true})
    _count?: CharacterConstellationCountAggregate;

    @Field(() => CharacterConstellationAvgAggregate, {nullable:true})
    _avg?: CharacterConstellationAvgAggregate;

    @Field(() => CharacterConstellationSumAggregate, {nullable:true})
    _sum?: CharacterConstellationSumAggregate;

    @Field(() => CharacterConstellationMinAggregate, {nullable:true})
    _min?: CharacterConstellationMinAggregate;

    @Field(() => CharacterConstellationMaxAggregate, {nullable:true})
    _max?: CharacterConstellationMaxAggregate;
}
