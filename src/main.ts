import { query, formValue } from './core/index'
import useDomEvent from './core/hooks/useDomEvent'
import useOutput from './ui/utils/useOutput'
import { sign } from './domain/sign/api'

import './style.scss'

const output = useOutput(query('output'))

sign.on('signInError', ({ message }) => {
  output.error(message)
})

sign.on('signInSuccess', ({ message }) => {
  output.success(message)
})

const form = query('form')
const formEvent = useDomEvent(form)

formEvent.on('submit', (event) => {
  event.preventDefault()
  sign.emit('signIn', formValue(form))
})
