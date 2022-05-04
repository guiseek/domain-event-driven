import { Callback } from './callback'

export type On<ValueMap> = <Property extends keyof ValueMap>(
  key: Property,
  fn: Callback<ValueMap[Property]>
) => void
