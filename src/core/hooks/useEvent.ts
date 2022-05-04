import { EventLayer } from '../types/eventLayer'
import { ValueMap } from '../types/valueMap'
import useEventHook from './useEventHook'

function useEvent() {
  const map = new Map()

  return <T extends ValueMap<T>>(): EventLayer<T> => {
    return useEventHook(map)
  }
}

export default useEvent()
