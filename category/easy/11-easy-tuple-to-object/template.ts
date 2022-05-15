type aTupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

// T 是元组  [p in T[number]]  映射数组的每一项  T[number] number 相当于下标