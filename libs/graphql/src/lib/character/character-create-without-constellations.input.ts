import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterPassiveTalentCreateNestedManyWithoutCharacterInput } from '../character-passive-talent/character-passive-talent-create-nested-many-without-character.input';
import { CharacterSkillTalentCreateNestedManyWithoutCharacterInput } from '../character-skill-talent/character-skill-talent-create-nested-many-without-character.input';

@InputType()
export class CharacterCreateWithoutConstellationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    vision!: string;

    @Field(() => String, {nullable:false})
    weapon!: string;

    @Field(() => String, {nullable:false})
    affiliation!: string;

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => CharacterPassiveTalentCreateNestedManyWithoutCharacterInput, {nullable:true})
    passiveTalents?: CharacterPassiveTalentCreateNestedManyWithoutCharacterInput;

    @Field(() => CharacterSkillTalentCreateNestedManyWithoutCharacterInput, {nullable:true})
    skillTalents?: CharacterSkillTalentCreateNestedManyWithoutCharacterInput;
}
