import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterCreateWithoutSkillTalentsInput } from './character-create-without-skill-talents.input';
import { CharacterCreateOrConnectWithoutSkillTalentsInput } from './character-create-or-connect-without-skill-talents.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';

@InputType()
export class CharacterCreateNestedOneWithoutSkillTalentsInput {

    @Field(() => CharacterCreateWithoutSkillTalentsInput, {nullable:true})
    create?: CharacterCreateWithoutSkillTalentsInput;

    @Field(() => CharacterCreateOrConnectWithoutSkillTalentsInput, {nullable:true})
    connectOrCreate?: CharacterCreateOrConnectWithoutSkillTalentsInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    connect?: CharacterWhereUniqueInput;
}
