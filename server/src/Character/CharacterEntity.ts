import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectType, Field, Int, ID } from 'type-graphql';

@Entity()
@ObjectType()
export class CharacterEntity {
    @ObjectIdColumn()
    @Field(() => ID)
    _id: string;
    @Column()
    @Field()
    firstName: string;
    @Column()
    @Field(() => Int)
    age: number;
    @Column()
    @Field()
    address: string;
}
