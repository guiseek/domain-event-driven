import { sign } from '../event'

sign.on('signUp', (v) => {
  console.log('SIGN UP:', v)
  alert(JSON.stringify(v))
})
