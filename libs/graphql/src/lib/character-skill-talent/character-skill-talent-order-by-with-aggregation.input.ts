import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharacterSkillTalentCountOrderByAggregateInput } from './character-skill-talent-count-order-by-aggregate.input';
import { CharacterSkillTalentMaxOrderByAggregateInput } from './character-skill-talent-max-order-by-aggregate.input';
import { CharacterSkillTalentMinOrderByAggregateInput } from './character-skill-talent-min-order-by-aggregate.input';

@InputType()
export class CharacterSkillTalentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    characterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unlock?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => CharacterSkillTalentCountOrderByAggregateInput, {nullable:true})
    _count?: CharacterSkillTalentCountOrderByAggregateInput;

    @Field(() => CharacterSkillTalentMaxOrderByAggregateInput, {nullable:true})
    _max?: CharacterSkillTalentMaxOrderByAggregateInput;

    @Field(() => CharacterSkillTalentMinOrderByAggregateInput, {nullable:true})
    _min?: CharacterSkillTalentMinOrderByAggregateInput;
}
