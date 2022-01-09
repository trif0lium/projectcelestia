import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterConstellationScalarWhereInput } from './character-constellation-scalar-where.input';
import { CharacterConstellationUpdateManyMutationInput } from './character-constellation-update-many-mutation.input';

@InputType()
export class CharacterConstellationUpdateManyWithWhereWithoutCharacterInput {

    @Field(() => CharacterConstellationScalarWhereInput, {nullable:false})
    where!: CharacterConstellationScalarWhereInput;

    @Field(() => CharacterConstellationUpdateManyMutationInput, {nullable:false})
    data!: CharacterConstellationUpdateManyMutationInput;
}
