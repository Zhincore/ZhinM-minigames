export type Replace<T, P> = P & Omit<T, keyof P>;
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
