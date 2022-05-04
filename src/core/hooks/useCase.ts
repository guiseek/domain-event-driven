import { ValidationFn } from '../types/valildationFn'
import { UseCaseFn } from '../types/useCaseFn'
import { AbortFn } from '../types/abortFn'

function useCase() {
  const controller = new AbortController()

  return <T>(
    value: T,
    useCase: UseCaseFn<T>,
    validation: ValidationFn<T> = () => true,
    abortFn: AbortFn = () => void 0
  ) => {
    if (!validation(value)) {
      abortFn(controller.signal)

      return controller.abort()
    }

    useCase(value)
  }
}

export default useCase()
