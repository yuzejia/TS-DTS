import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, aMyPick<Todo, "title">>>,
  Expect<Equal<Expected2, aMyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  aMyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

let a: aMyPick<Todo, keyof Expected2> = {
  title: "11",
  completed: true,
};
