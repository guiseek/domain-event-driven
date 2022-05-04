import { Callback } from '../types/callback'

function useEventHook<ValueMap>(map: Map<any, any>) {
  function pick<Property extends keyof ValueMap>(
    key: Property
  ): Callback<ValueMap[Property]>[] {
    return map.get(key) ?? []
  }
  function on<Property extends keyof ValueMap>(
    key: Property,
    fn: Callback<ValueMap[Property]>
  ) {
    const events = pick(key)
    map.set(key, [...events, fn])
  }
  function emit<Property extends keyof ValueMap>(
    key: Property,
    value: ValueMap[Property]
  ): void {
    const events = pick(key)
    events.forEach((fn) => fn(value))
  }
  return { on, emit, pick }
}

export default useEventHook
