import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterPassiveTalentCreateManyInput } from './character-passive-talent-create-many.input';

@ArgsType()
export class CreateManyCharacterPassiveTalentArgs {

    @Field(() => [CharacterPassiveTalentCreateManyInput], {nullable:false})
    data!: Array<CharacterPassiveTalentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
