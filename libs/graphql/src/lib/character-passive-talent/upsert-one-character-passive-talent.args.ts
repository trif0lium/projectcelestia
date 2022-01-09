import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterPassiveTalentWhereUniqueInput } from './character-passive-talent-where-unique.input';
import { CharacterPassiveTalentCreateInput } from './character-passive-talent-create.input';
import { CharacterPassiveTalentUpdateInput } from './character-passive-talent-update.input';

@ArgsType()
export class UpsertOneCharacterPassiveTalentArgs {

    @Field(() => CharacterPassiveTalentWhereUniqueInput, {nullable:false})
    where!: CharacterPassiveTalentWhereUniqueInput;

    @Field(() => CharacterPassiveTalentCreateInput, {nullable:false})
    create!: CharacterPassiveTalentCreateInput;

    @Field(() => CharacterPassiveTalentUpdateInput, {nullable:false})
    update!: CharacterPassiveTalentUpdateInput;
}
