import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterUpdateWithoutPassiveTalentsInput } from './character-update-without-passive-talents.input';
import { CharacterCreateWithoutPassiveTalentsInput } from './character-create-without-passive-talents.input';

@InputType()
export class CharacterUpsertWithoutPassiveTalentsInput {

    @Field(() => CharacterUpdateWithoutPassiveTalentsInput, {nullable:false})
    update!: CharacterUpdateWithoutPassiveTalentsInput;

    @Field(() => CharacterCreateWithoutPassiveTalentsInput, {nullable:false})
    create!: CharacterCreateWithoutPassiveTalentsInput;
}
