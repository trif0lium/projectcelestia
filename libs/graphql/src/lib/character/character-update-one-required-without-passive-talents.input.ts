import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterCreateWithoutPassiveTalentsInput } from './character-create-without-passive-talents.input';
import { CharacterCreateOrConnectWithoutPassiveTalentsInput } from './character-create-or-connect-without-passive-talents.input';
import { CharacterUpsertWithoutPassiveTalentsInput } from './character-upsert-without-passive-talents.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { CharacterUpdateWithoutPassiveTalentsInput } from './character-update-without-passive-talents.input';

@InputType()
export class CharacterUpdateOneRequiredWithoutPassiveTalentsInput {

    @Field(() => CharacterCreateWithoutPassiveTalentsInput, {nullable:true})
    create?: CharacterCreateWithoutPassiveTalentsInput;

    @Field(() => CharacterCreateOrConnectWithoutPassiveTalentsInput, {nullable:true})
    connectOrCreate?: CharacterCreateOrConnectWithoutPassiveTalentsInput;

    @Field(() => CharacterUpsertWithoutPassiveTalentsInput, {nullable:true})
    upsert?: CharacterUpsertWithoutPassiveTalentsInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    connect?: CharacterWhereUniqueInput;

    @Field(() => CharacterUpdateWithoutPassiveTalentsInput, {nullable:true})
    update?: CharacterUpdateWithoutPassiveTalentsInput;
}
