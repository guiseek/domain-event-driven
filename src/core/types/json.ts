export type Json<T = unknown> = T extends unknown
  ? { [K in keyof T]: T[K] }
  : Record<string, string | number>
