import { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<aLength<typeof tesla>, 4>>,
  Expect<Equal<aLength<typeof spaceX>, 5>>,
  // @ts-expect-error
  aLength<5>,
  // @ts-expect-error
  aLength<'hello world'>,
]
