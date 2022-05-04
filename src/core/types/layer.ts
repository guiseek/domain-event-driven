export interface Layer<Input, Output> {
  (input: Input): Output
}

