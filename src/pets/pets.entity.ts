import { Int, ObjectType, Field } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() //Typeorm
@ObjectType() //GraphQL
export class Pet {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column({ nullable: true })
    @Field({ nullable: true })
    type?: string;
}