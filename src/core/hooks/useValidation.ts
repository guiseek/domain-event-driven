import { EventLayer } from '../types/eventLayer'
import useEventHook from './useEventHook'

function useValidation() {
  const map = new Map()

  return <ValueMap>(): EventLayer<ValueMap> => {
    return useEventHook(map)
  }
}

export default useValidation()
