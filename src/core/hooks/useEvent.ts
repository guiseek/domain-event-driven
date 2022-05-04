import { EventLayer } from '../types/eventLayer'
import { Callback } from '../types/callback'
import { ValueMap } from '../types/valueMap'

function useEvent() {
  const map = new Map()

  return <T extends ValueMap<T>>(): EventLayer<T> => {
    function pick<Property extends keyof T>(
      key: Property
    ): Callback<T[Property]>[] {
      return map.get(key) ?? []
    }

    function on<Property extends keyof T>(
      key: Property,
      fn: Callback<T[Property]>
    ) {
      const events = pick(key)
      map.set(key, [...events, fn])
    }

    function emit<Property extends keyof T>(
      key: Property,
      value: T[Property]
    ): void {
      const events = pick(key)
      events.forEach((fn) => fn(value))
    }

    return { on, emit, pick }
  }
}

export default useEvent()
