import { PredicateFn } from '../types/preficateFn'

export function not(predicate: PredicateFn) {
  return function negated(...args: unknown[]) {
    return !predicate(...args)
  }
}
