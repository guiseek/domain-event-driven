import useCase from '../../../core/hooks/useCase'
import { SignIn } from '../api'
import { sign } from '../event'

/**
 * Use case
 */
sign.on('signIn', (value) => {
  useCase(
    value,
    
    /* Business function */
    (value: SignIn) => {
      sign.emit('signInSuccess', { message: `${value.email} OK` })
    },
    
    /* Validation function */
    ({ email }: SignIn) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    },
    
    /* Abort function */
    ({ email }: SignIn) => {
      sign.emit('signInError', { message: `Email ${email} inválido` })
    }
  )
})
