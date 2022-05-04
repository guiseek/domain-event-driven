import { ValueObject } from './valueObject'
import { Layer } from './layer'

export interface UseCase<Input, Output> extends Layer<Input, Output> {
  (input: ValueObject<Input>): Promise<Output>
}
