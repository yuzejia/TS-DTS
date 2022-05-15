type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P)=> any ? P : never


// 从函数类型的参数中使用的类型构造元组类型Type。
const aa = (a:string, b: string): void => {}
let asd: MyParameters<typeof aa> = ['1','2']