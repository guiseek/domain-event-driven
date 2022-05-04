export type ValueMap<ValueObject> = {
  [Property in keyof ValueObject]: ValueObject[Property]
}
