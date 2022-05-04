export type AbortFn<T> = (value: T, signal: AbortSignal) => void
