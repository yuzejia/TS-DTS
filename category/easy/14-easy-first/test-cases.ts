import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<aFirst<[3, 2, 1]>, 3>>,
  Expect<Equal<aFirst<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<aFirst<[]>, never>>,
  Expect<Equal<aFirst<[undefined]>, undefined>>
]

type errors = [
  // @ts-expect-error
  aFirst<'notArray'>,
  // @ts-expect-error
  aFirst<{ 0: 'arrayLike' }>
]
