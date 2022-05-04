import { Callback } from './callback'

export type Pick<ValueMap> = <Property extends keyof ValueMap>(
  key: Property
) => Callback<ValueMap[Property]>[]
