type MyPick<T, K extends keyof T> = {
  [p in K]: T[p];
};
