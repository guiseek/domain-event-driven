import repository from '../../../infra/sign/repository'
import useCase from '../../../core/hooks/useCase'
import { SignIn, SignInSuccess } from '../api'
import { sign } from '../event'

const validadeEmail = ({ email }: SignIn) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

sign.on('signIn', (value) => {
  useCase(
    value,
    (value) => {
      // repository
      //   .post<SignInSuccess, SignIn>('sign-in', value)
      //   .then(({ message }) => {
      //     sign.emit('signInSuccess', { message })
      //   })
      sign.emit('signInSuccess', { message: 'OK' })
    },
    ({ email }: SignIn) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    },
    (abort) => {
      sign.emit('signInError', { message: 'Email inválido' })
      // abort.dispatchEvent(new Event('abort'))
    }
  )
})
