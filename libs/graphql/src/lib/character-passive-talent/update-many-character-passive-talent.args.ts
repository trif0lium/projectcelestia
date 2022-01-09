import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterPassiveTalentUpdateManyMutationInput } from './character-passive-talent-update-many-mutation.input';
import { CharacterPassiveTalentWhereInput } from './character-passive-talent-where.input';

@ArgsType()
export class UpdateManyCharacterPassiveTalentArgs {

    @Field(() => CharacterPassiveTalentUpdateManyMutationInput, {nullable:false})
    data!: CharacterPassiveTalentUpdateManyMutationInput;

    @Field(() => CharacterPassiveTalentWhereInput, {nullable:true})
    where?: CharacterPassiveTalentWhereInput;
}
