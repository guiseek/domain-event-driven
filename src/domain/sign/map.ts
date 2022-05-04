import { SignIn, SignInSuccess, SignInError } from './entities/signIn'
import { SignUp } from './entities/signUp'

export interface SignMap {
  signIn: SignIn
  signInSuccess: SignInSuccess
  signInError: SignInError
  validate: SignIn
  signUp: SignUp
}
