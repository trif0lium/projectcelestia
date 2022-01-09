import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterConstellationWhereInput } from './character-constellation-where.input';
import { CharacterConstellationOrderByWithRelationInput } from './character-constellation-order-by-with-relation.input';
import { CharacterConstellationWhereUniqueInput } from './character-constellation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacterConstellationCountAggregateInput } from './character-constellation-count-aggregate.input';
import { CharacterConstellationAvgAggregateInput } from './character-constellation-avg-aggregate.input';
import { CharacterConstellationSumAggregateInput } from './character-constellation-sum-aggregate.input';
import { CharacterConstellationMinAggregateInput } from './character-constellation-min-aggregate.input';
import { CharacterConstellationMaxAggregateInput } from './character-constellation-max-aggregate.input';

@ArgsType()
export class CharacterConstellationAggregateArgs {

    @Field(() => CharacterConstellationWhereInput, {nullable:true})
    where?: CharacterConstellationWhereInput;

    @Field(() => [CharacterConstellationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterConstellationOrderByWithRelationInput>;

    @Field(() => CharacterConstellationWhereUniqueInput, {nullable:true})
    cursor?: CharacterConstellationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CharacterConstellationCountAggregateInput, {nullable:true})
    _count?: CharacterConstellationCountAggregateInput;

    @Field(() => CharacterConstellationAvgAggregateInput, {nullable:true})
    _avg?: CharacterConstellationAvgAggregateInput;

    @Field(() => CharacterConstellationSumAggregateInput, {nullable:true})
    _sum?: CharacterConstellationSumAggregateInput;

    @Field(() => CharacterConstellationMinAggregateInput, {nullable:true})
    _min?: CharacterConstellationMinAggregateInput;

    @Field(() => CharacterConstellationMaxAggregateInput, {nullable:true})
    _max?: CharacterConstellationMaxAggregateInput;
}
