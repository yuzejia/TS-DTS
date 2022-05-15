type aMyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}
