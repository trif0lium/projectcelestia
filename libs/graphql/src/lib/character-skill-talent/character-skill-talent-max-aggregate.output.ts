import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacterSkillTalentType } from '../prisma/character-skill-talent-type.enum';

@ObjectType()
export class CharacterSkillTalentMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    characterId?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    unlock?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => CharacterSkillTalentType, {nullable:true})
    type?: keyof typeof CharacterSkillTalentType;
}
