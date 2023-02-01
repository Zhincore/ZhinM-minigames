export type Replace<T, P> = P & Omit<T, keyof P>;
