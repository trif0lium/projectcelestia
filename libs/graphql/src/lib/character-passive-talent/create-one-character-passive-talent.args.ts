import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterPassiveTalentCreateInput } from './character-passive-talent-create.input';

@ArgsType()
export class CreateOneCharacterPassiveTalentArgs {

    @Field(() => CharacterPassiveTalentCreateInput, {nullable:false})
    data!: CharacterPassiveTalentCreateInput;
}
