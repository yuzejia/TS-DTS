type GetReadonlyKeys<T> = keyof { [K in keyof T as (<P>() => P extends { [P in K]: T[P] }
    ? true
    : never) extends <P>() => P extends { readonly [P in K]: T[P] }
    ? true
    : never
    ? K
    : never]: never;
};
