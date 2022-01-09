import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentType } from '../prisma/character-skill-talent-type.enum';

@InputType()
export class CharacterSkillTalentUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    characterId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unlock!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => CharacterSkillTalentType, {nullable:true})
    type?: keyof typeof CharacterSkillTalentType;
}
