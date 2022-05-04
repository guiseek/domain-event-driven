import { api } from '../app'

const users = [{ id: 1, name: 'Gui', email: 'email@guiseek.dev' }]

api.post('/sign/in', (req, res) => {
  const { email } = req.body ?? {}

  if (!email) {
    res.status(400).json({ message: 'Email is required' })
    return
  }

  const user = users.find((user) => user.email === email)

  if (!user) {
    return res.status(403).json({ message: 'Invalid credentials' })
  }

  return res.status(200).json({ message: `Logged as ${user.name}` })
})

export default api
