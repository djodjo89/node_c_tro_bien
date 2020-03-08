import { InputType, Field, Int } from 'type-graphql';

@InputType()
export default class CharacterInput {
    @Field()
    public firstName: string;
    @Field(() => Int)
    public age: number;
    @Field()
    public address: string;
}
