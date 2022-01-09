import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterPassiveTalentCreateManyCharacterInput } from './character-passive-talent-create-many-character.input';

@InputType()
export class CharacterPassiveTalentCreateManyCharacterInputEnvelope {

    @Field(() => [CharacterPassiveTalentCreateManyCharacterInput], {nullable:false})
    data!: Array<CharacterPassiveTalentCreateManyCharacterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
