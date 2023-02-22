type GenericPrefixed<T extends string, U extends string> = T extends "" ? "" : `${U}${T}`

export type NestedKeysWithPrefix<T, U extends  string> = (T extends object ?
    { [K in Exclude<keyof T, symbol>]: `${K}${GenericPrefixed<NestedKeysWithPrefix<T[K], U>, U>}` }[Exclude<keyof T, symbol>]
    : "") extends infer D ? Extract<D, string> : never;

