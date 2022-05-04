import useCase from '../../../core/hooks/useCase'
import { SignIn, SignInSuccess } from '../api'
import post from '../../../infra/sign/post'
import { sign } from '../event'

/**
 * Use case
 */
sign.on('signIn', (value) => {
  useCase(
    value,

    /* Business */
    (value) => {
      post<SignInSuccess, SignIn>('in', value)
        .then((response) => {
          sign.emit('signInSuccess', response)
        })
        .catch((response) => {
          sign.emit('signInError', response)
        })
    },

    /* Validation */
    ({ email }) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    },

    /* Abort */
    ({ email }) => {
      sign.emit('signInError', { message: `Email ${email} inválido` })
    }
  )
})
