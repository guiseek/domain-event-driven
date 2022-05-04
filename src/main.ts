import { sign } from './domain/sign/api'
import { query } from './core/utils/query'

sign.on('signInSuccess', console.log)

sign.on('signInError', console.log)

query<'button'>('#sign-in-ok').onclick = () => {
  sign.emit('signIn', { email: 'hello@guiseek.dev' })
}
query<'button'>('#sign-in-fail').onclick = () => {
  sign.emit('signIn', { email: 'hello' })
}
