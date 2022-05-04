import { compose } from './compose'

export const pipe = reverseArgs(compose)
