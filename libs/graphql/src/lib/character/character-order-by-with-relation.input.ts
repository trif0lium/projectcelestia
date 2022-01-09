import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharacterConstellationOrderByRelationAggregateInput } from '../character-constellation/character-constellation-order-by-relation-aggregate.input';
import { CharacterPassiveTalentOrderByRelationAggregateInput } from '../character-passive-talent/character-passive-talent-order-by-relation-aggregate.input';
import { CharacterSkillTalentOrderByRelationAggregateInput } from '../character-skill-talent/character-skill-talent-order-by-relation-aggregate.input';

@InputType()
export class CharacterOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vision?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weapon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    affiliation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rarity?: keyof typeof SortOrder;

    @Field(() => CharacterConstellationOrderByRelationAggregateInput, {nullable:true})
    constellations?: CharacterConstellationOrderByRelationAggregateInput;

    @Field(() => CharacterPassiveTalentOrderByRelationAggregateInput, {nullable:true})
    passiveTalents?: CharacterPassiveTalentOrderByRelationAggregateInput;

    @Field(() => CharacterSkillTalentOrderByRelationAggregateInput, {nullable:true})
    skillTalents?: CharacterSkillTalentOrderByRelationAggregateInput;
}
