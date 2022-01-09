import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterConstellationWhereUniqueInput } from './character-constellation-where-unique.input';
import { CharacterConstellationCreateInput } from './character-constellation-create.input';
import { CharacterConstellationUpdateInput } from './character-constellation-update.input';

@ArgsType()
export class UpsertOneCharacterConstellationArgs {

    @Field(() => CharacterConstellationWhereUniqueInput, {nullable:false})
    where!: CharacterConstellationWhereUniqueInput;

    @Field(() => CharacterConstellationCreateInput, {nullable:false})
    create!: CharacterConstellationCreateInput;

    @Field(() => CharacterConstellationUpdateInput, {nullable:false})
    update!: CharacterConstellationUpdateInput;
}
