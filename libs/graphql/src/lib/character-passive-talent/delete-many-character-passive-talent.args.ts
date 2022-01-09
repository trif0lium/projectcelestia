import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterPassiveTalentWhereInput } from './character-passive-talent-where.input';

@ArgsType()
export class DeleteManyCharacterPassiveTalentArgs {

    @Field(() => CharacterPassiveTalentWhereInput, {nullable:true})
    where?: CharacterPassiveTalentWhereInput;
}
