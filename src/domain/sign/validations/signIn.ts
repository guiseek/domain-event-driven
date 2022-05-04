import { sign } from '../event'

sign.on('validate', (value) => {
  console.log(value);
})
