import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { CharacterConstellationListRelationFilter } from '../character-constellation/character-constellation-list-relation-filter.input';
import { CharacterPassiveTalentListRelationFilter } from '../character-passive-talent/character-passive-talent-list-relation-filter.input';
import { CharacterSkillTalentListRelationFilter } from '../character-skill-talent/character-skill-talent-list-relation-filter.input';

@InputType()
export class CharacterWhereInput {

    @Field(() => [CharacterWhereInput], {nullable:true})
    AND?: Array<CharacterWhereInput>;

    @Field(() => [CharacterWhereInput], {nullable:true})
    OR?: Array<CharacterWhereInput>;

    @Field(() => [CharacterWhereInput], {nullable:true})
    NOT?: Array<CharacterWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    vision?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    weapon?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    affiliation?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rarity?: IntFilter;

    @Field(() => CharacterConstellationListRelationFilter, {nullable:true})
    constellations?: CharacterConstellationListRelationFilter;

    @Field(() => CharacterPassiveTalentListRelationFilter, {nullable:true})
    passiveTalents?: CharacterPassiveTalentListRelationFilter;

    @Field(() => CharacterSkillTalentListRelationFilter, {nullable:true})
    skillTalents?: CharacterSkillTalentListRelationFilter;
}
