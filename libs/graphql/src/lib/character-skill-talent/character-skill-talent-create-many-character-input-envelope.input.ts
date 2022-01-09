import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterSkillTalentCreateManyCharacterInput } from './character-skill-talent-create-many-character.input';

@InputType()
export class CharacterSkillTalentCreateManyCharacterInputEnvelope {

    @Field(() => [CharacterSkillTalentCreateManyCharacterInput], {nullable:false})
    data!: Array<CharacterSkillTalentCreateManyCharacterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
