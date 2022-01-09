import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterPassiveTalentScalarWhereInput } from './character-passive-talent-scalar-where.input';
import { CharacterPassiveTalentUpdateManyMutationInput } from './character-passive-talent-update-many-mutation.input';

@InputType()
export class CharacterPassiveTalentUpdateManyWithWhereWithoutCharacterInput {

    @Field(() => CharacterPassiveTalentScalarWhereInput, {nullable:false})
    where!: CharacterPassiveTalentScalarWhereInput;

    @Field(() => CharacterPassiveTalentUpdateManyMutationInput, {nullable:false})
    data!: CharacterPassiveTalentUpdateManyMutationInput;
}
