import {Field, Int, ObjectType} from "type-graphql";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity()
export class Movie extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @Field()
  title: string

  @Field(() => Int)
  @Column('int', {default: 60})
  minutes: number 
}