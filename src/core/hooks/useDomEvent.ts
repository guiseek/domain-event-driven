import { Callback } from '../index'

function useDomEvent() {
  const map = new Map()

  return (element: HTMLElement) => {
    function pick<Property extends keyof HTMLElementEventMap>(
      key: Property
    ): Callback<HTMLElementEventMap[Property]>[] {
      return map.get(key) ?? []
    }

    function on<Property extends keyof HTMLElementEventMap>(
      key: Property,
      fn: Callback<HTMLElementEventMap[Property]>
    ) {
      const events = pick(key)

      element.addEventListener(key, fn)

      map.set(key, [...events, fn])
    }

    function remove<Property extends keyof HTMLElementEventMap>(
      key: Property
    ): void {
      const events = pick(key)
      events.forEach((fn) => element.removeEventListener(key, fn))
    }

    return { on, remove, pick }
  }
}

export default useDomEvent()
