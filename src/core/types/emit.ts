export type Emit<ValueMap> = <Property extends keyof ValueMap>(
  key: Property,
  value: ValueMap[Property]
) => void
