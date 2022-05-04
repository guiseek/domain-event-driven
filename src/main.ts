import { query, formValue } from './core/index'
import { sign } from './domain/sign/api'

import './style.scss'

const output = query('output')
const styles = output.classList

function setOutput(message: string) {
  output.textContent = message

  return {
    error() {
      styles.remove('success')
      styles.add('error')
    },
    success() {
      styles.remove('error')
      styles.add('success')
    },
  }
}

sign.on('signInError', ({ message }) => {
  setOutput(message).error()
})

sign.on('signInSuccess', ({ message }) => {
  setOutput(message).success()
})

const form = query('form')

form.onsubmit = (event) => {
  event.preventDefault()
  sign.emit('signIn', formValue(form))
}
