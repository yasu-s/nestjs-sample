import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver('Author')
export class AuthorResolver {
  readonly authorMaps = new Map<number, { firstName: string; lastName: string }>([
    [1, { firstName: 'hige', lastName: 'hoge' }],
    [2, { firstName: 'sample', lastName: 'user' }],
    [3, { firstName: 'sample', lastName: 'hoge' }],
  ]);

  @Query()
  async author(@Args('id') id: number) {
    console.log('id -', id);
    const author = this.authorMaps.get(id);
    return {
      id,
      firstName: author.firstName,
      lastName: author.lastName,
    };
  }
}
