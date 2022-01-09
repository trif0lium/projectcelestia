import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ArtifactUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    maxRarity!: number;

    @Field(() => String, {nullable:false})
    twoPieceBonus!: string;

    @Field(() => String, {nullable:false})
    fourPieceBonus!: string;
}
