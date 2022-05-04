import { Fn } from '../types/fn'

export function reverseArgs(fn: Fn) {
  return function argsReversed(...args: unknown[]) {
    return fn(...args.reverse())
  }
}
