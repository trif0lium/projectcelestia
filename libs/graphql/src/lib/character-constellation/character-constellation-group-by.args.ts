import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterConstellationWhereInput } from './character-constellation-where.input';
import { CharacterConstellationOrderByWithAggregationInput } from './character-constellation-order-by-with-aggregation.input';
import { CharacterConstellationScalarFieldEnum } from './character-constellation-scalar-field.enum';
import { CharacterConstellationScalarWhereWithAggregatesInput } from './character-constellation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CharacterConstellationCountAggregateInput } from './character-constellation-count-aggregate.input';
import { CharacterConstellationAvgAggregateInput } from './character-constellation-avg-aggregate.input';
import { CharacterConstellationSumAggregateInput } from './character-constellation-sum-aggregate.input';
import { CharacterConstellationMinAggregateInput } from './character-constellation-min-aggregate.input';
import { CharacterConstellationMaxAggregateInput } from './character-constellation-max-aggregate.input';

@ArgsType()
export class CharacterConstellationGroupByArgs {

    @Field(() => CharacterConstellationWhereInput, {nullable:true})
    where?: CharacterConstellationWhereInput;

    @Field(() => [CharacterConstellationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CharacterConstellationOrderByWithAggregationInput>;

    @Field(() => [CharacterConstellationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CharacterConstellationScalarFieldEnum>;

    @Field(() => CharacterConstellationScalarWhereWithAggregatesInput, {nullable:true})
    having?: CharacterConstellationScalarWhereWithAggregatesInput;

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
