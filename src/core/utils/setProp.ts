export function setProp<
  K extends string,
  T extends Record<string, any>,
  V extends T[K]
>(name: keyof T, obj: T, val: V) {
  const o = Object.assign({}, obj)
  o[name] = val
  return o
}
