export function zip<T>(arr1: T[], arr2: T[]) {
  const zipped = []
  arr1 = [...arr1]
  arr2 = [...arr2]

  while (arr1.length > 0 && arr2.length > 0) {
    zipped.push([arr1.shift(), arr2.shift()])
  }

  return zipped
}
