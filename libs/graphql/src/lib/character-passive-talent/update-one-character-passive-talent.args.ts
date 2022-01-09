import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterPassiveTalentUpdateInput } from './character-passive-talent-update.input';
import { CharacterPassiveTalentWhereUniqueInput } from './character-passive-talent-where-unique.input';

@ArgsType()
export class UpdateOneCharacterPassiveTalentArgs {

    @Field(() => CharacterPassiveTalentUpdateInput, {nullable:false})
    data!: CharacterPassiveTalentUpdateInput;

    @Field(() => CharacterPassiveTalentWhereUniqueInput, {nullable:false})
    where!: CharacterPassiveTalentWhereUniqueInput;
}
