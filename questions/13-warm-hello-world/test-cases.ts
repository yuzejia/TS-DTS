import { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorlds>>,
  Expect<Equal<HelloWorlds, string>>
]
