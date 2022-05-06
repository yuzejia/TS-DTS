type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};

// js 实现

// function tupleObj(arr = []) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i];
//     obj[key] = key;
//   }

//   return obj;
// }
