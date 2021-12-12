import {Movie} from "../entity/Movie";
import {Arg, Field, InputType, Int, Mutation, Query, Resolver} from "type-graphql";

@InputType()
class MovieInputType {
  @Field()
  title: string

  @Field(() => Int)
  minutes: number
}

@Resolver()
export class MovieMutation {
  @Mutation(() => Movie)
  async createMovie(
    @Arg('options', () => MovieInputType) options: MovieInputType
  ) {
    const movie = await Movie.create(options).save()
    return movie
  }

  @Mutation(() => Boolean)
  async updateMovie(@Arg('id', () => Int) id: number, @Arg('input', () => MovieInputType) input: MovieInputType) {
    await Movie.update({ id }, input)
    return true
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Arg('id', () => Int) id: number) {
    Movie.delete({id})
    return true
  }

  @Query(() => [Movie])
  movies() {
    return Movie.find()
  }
}