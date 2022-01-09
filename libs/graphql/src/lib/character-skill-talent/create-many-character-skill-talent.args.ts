import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterSkillTalentCreateManyInput } from './character-skill-talent-create-many.input';

@ArgsType()
export class CreateManyCharacterSkillTalentArgs {

    @Field(() => [CharacterSkillTalentCreateManyInput], {nullable:false})
    data!: Array<CharacterSkillTalentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
