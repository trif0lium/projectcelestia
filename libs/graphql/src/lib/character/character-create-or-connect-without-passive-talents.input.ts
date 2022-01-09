import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { CharacterCreateWithoutPassiveTalentsInput } from './character-create-without-passive-talents.input';

@InputType()
export class CharacterCreateOrConnectWithoutPassiveTalentsInput {

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    where!: CharacterWhereUniqueInput;

    @Field(() => CharacterCreateWithoutPassiveTalentsInput, {nullable:false})
    create!: CharacterCreateWithoutPassiveTalentsInput;
}
