import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterConstellationUncheckedCreateNestedManyWithoutCharacterInput } from '../character-constellation/character-constellation-unchecked-create-nested-many-without-character.input';
import { CharacterSkillTalentUncheckedCreateNestedManyWithoutCharacterInput } from '../character-skill-talent/character-skill-talent-unchecked-create-nested-many-without-character.input';

@InputType()
export class CharacterUncheckedCreateWithoutPassiveTalentsInput {

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

    @Field(() => CharacterConstellationUncheckedCreateNestedManyWithoutCharacterInput, {nullable:true})
    constellations?: CharacterConstellationUncheckedCreateNestedManyWithoutCharacterInput;

    @Field(() => CharacterSkillTalentUncheckedCreateNestedManyWithoutCharacterInput, {nullable:true})
    skillTalents?: CharacterSkillTalentUncheckedCreateNestedManyWithoutCharacterInput;
}
