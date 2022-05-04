import { Fn } from '../types/fn'

export function curry<T>(fn: Fn<T>, arity = fn.length) {
  return (function nextCurried(prevArgs: T[]) {
    return function curried(nextArg: T) {
      const args = [...prevArgs, nextArg]

      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}
