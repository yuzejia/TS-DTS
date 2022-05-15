// type aFirst<T extends any[]> = T['length'] extends 0  ? never:  T[0] 

// 网上看到有用 infer  什么意思 不懂
// 了解下 infer 用来推到 推到的类型
type aFirst<T extends any[]> = T extends [infer R, ...infer K] ? R : never;

// T['length'] 的长度 如果 为0  则标识 数组 空 否则 返回 第一项
