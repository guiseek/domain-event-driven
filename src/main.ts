import { sign } from './domain/sign/api'
import { query } from './core/utils/query'

query<'button'>('#sign-in').onclick = () => {
  sign.emit('validate', { email: 'hello@guiseek.dev' })
  sign.emit('signIn', { email: 'hello' })
  sign.on('validate', (value) => console.log(value))
  sign.on('validate', (value) => console.log(value))
}

query<'button'>('#sign-up').onclick = () => {
  sign.emit('signUp', { name: 'Gui Seek', email: 'hello@guiseek.dev' })
}
