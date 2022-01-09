import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { CharacterCreateWithoutSkillTalentsInput } from './character-create-without-skill-talents.input';

@InputType()
export class CharacterCreateOrConnectWithoutSkillTalentsInput {

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    where!: CharacterWhereUniqueInput;

    @Field(() => CharacterCreateWithoutSkillTalentsInput, {nullable:false})
    create!: CharacterCreateWithoutSkillTalentsInput;
}
