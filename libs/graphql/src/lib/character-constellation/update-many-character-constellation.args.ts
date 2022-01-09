import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterConstellationUpdateManyMutationInput } from './character-constellation-update-many-mutation.input';
import { CharacterConstellationWhereInput } from './character-constellation-where.input';

@ArgsType()
export class UpdateManyCharacterConstellationArgs {

    @Field(() => CharacterConstellationUpdateManyMutationInput, {nullable:false})
    data!: CharacterConstellationUpdateManyMutationInput;

    @Field(() => CharacterConstellationWhereInput, {nullable:true})
    where?: CharacterConstellationWhereInput;
}
