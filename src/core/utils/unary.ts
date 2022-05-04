import { Fn } from '../types/fn'

export function unary(fn: Fn) {
  return function onlyOneArg(arg: unknown) {
    return fn(arg)
  }
}
