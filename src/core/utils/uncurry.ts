import { Fn } from '../types/fn'

export function uncurry<T extends Fn<T>>(fn: T) {
  return function uncurried<P extends Parameters<T>>(...args: P[]) {
    let ret = fn

    for (let i = 0; i < args.length; i++) {
      ret = ret(args[i])
    }

    return ret
  }
}
