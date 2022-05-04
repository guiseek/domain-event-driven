import { Fn } from '../types/fn'

export function compose<T>(...fns: Fn<T>[]) {
  return fns.reduceRight(function reducer(fn1, fn2) {
    return function composed(...args) {
      return fn2(fn1(...args))
    }
  })
}
