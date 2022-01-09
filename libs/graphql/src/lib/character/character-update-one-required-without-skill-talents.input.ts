import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterCreateWithoutSkillTalentsInput } from './character-create-without-skill-talents.input';
import { CharacterCreateOrConnectWithoutSkillTalentsInput } from './character-create-or-connect-without-skill-talents.input';
import { CharacterUpsertWithoutSkillTalentsInput } from './character-upsert-without-skill-talents.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { CharacterUpdateWithoutSkillTalentsInput } from './character-update-without-skill-talents.input';

@InputType()
export class CharacterUpdateOneRequiredWithoutSkillTalentsInput {

    @Field(() => CharacterCreateWithoutSkillTalentsInput, {nullable:true})
    create?: CharacterCreateWithoutSkillTalentsInput;

    @Field(() => CharacterCreateOrConnectWithoutSkillTalentsInput, {nullable:true})
    connectOrCreate?: CharacterCreateOrConnectWithoutSkillTalentsInput;

    @Field(() => CharacterUpsertWithoutSkillTalentsInput, {nullable:true})
    upsert?: CharacterUpsertWithoutSkillTalentsInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    connect?: CharacterWhereUniqueInput;

    @Field(() => CharacterUpdateWithoutSkillTalentsInput, {nullable:true})
    update?: CharacterUpdateWithoutSkillTalentsInput;
}
