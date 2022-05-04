import { Fn } from '../types/fn'

export function spreadArgs(fn: Fn) {
  return function spreadFn(argsArr: unknown[]) {
    return fn(...argsArr)
  }
}
