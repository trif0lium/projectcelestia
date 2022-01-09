import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterCreateWithoutPassiveTalentsInput } from './character-create-without-passive-talents.input';
import { CharacterCreateOrConnectWithoutPassiveTalentsInput } from './character-create-or-connect-without-passive-talents.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';

@InputType()
export class CharacterCreateNestedOneWithoutPassiveTalentsInput {

    @Field(() => CharacterCreateWithoutPassiveTalentsInput, {nullable:true})
    create?: CharacterCreateWithoutPassiveTalentsInput;

    @Field(() => CharacterCreateOrConnectWithoutPassiveTalentsInput, {nullable:true})
    connectOrCreate?: CharacterCreateOrConnectWithoutPassiveTalentsInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    connect?: CharacterWhereUniqueInput;
}
