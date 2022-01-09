import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterPassiveTalentCreateWithoutCharacterInput } from './character-passive-talent-create-without-character.input';
import { CharacterPassiveTalentCreateOrConnectWithoutCharacterInput } from './character-passive-talent-create-or-connect-without-character.input';
import { CharacterPassiveTalentCreateManyCharacterInputEnvelope } from './character-passive-talent-create-many-character-input-envelope.input';
import { CharacterPassiveTalentWhereUniqueInput } from './character-passive-talent-where-unique.input';

@InputType()
export class CharacterPassiveTalentCreateNestedManyWithoutCharacterInput {

    @Field(() => [CharacterPassiveTalentCreateWithoutCharacterInput], {nullable:true})
    create?: Array<CharacterPassiveTalentCreateWithoutCharacterInput>;

    @Field(() => [CharacterPassiveTalentCreateOrConnectWithoutCharacterInput], {nullable:true})
    connectOrCreate?: Array<CharacterPassiveTalentCreateOrConnectWithoutCharacterInput>;

    @Field(() => CharacterPassiveTalentCreateManyCharacterInputEnvelope, {nullable:true})
    createMany?: CharacterPassiveTalentCreateManyCharacterInputEnvelope;

    @Field(() => [CharacterPassiveTalentWhereUniqueInput], {nullable:true})
    connect?: Array<CharacterPassiveTalentWhereUniqueInput>;
}
