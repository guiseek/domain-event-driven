import repository from '../../../infra/sign/repository'
import useCase from '../../../core/hooks/useCase'
import { SignIn, SignInSuccess } from '../api'
import { sign } from '../event'

sign.on('signIn', (value) => {
  useCase(value, (value) => {
  
    repository
      .post<SignInSuccess, SignIn>('sign-in', value)
      .then(({ message }) => {
        sign.emit('signInSuccess', { message })
      })
  
    }, (value) => {
  
    return value.email.indexOf('@') !== -1
  
  }, (abort) => {
  
    abort.dispatchEvent(new Event('abort'))
  
  })
})
