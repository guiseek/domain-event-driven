import { Pick } from './pick'
import { Emit } from './emit'
import { On } from './on'

export type EventLayer<ValueMap> = {
  on: On<ValueMap>
  emit: Emit<ValueMap>
  pick: Pick<ValueMap>
}
