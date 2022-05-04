export function prop<T extends Record<string, any>>(name: keyof T, obj: T) {
  return obj[name]
}
