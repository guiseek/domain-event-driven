import { api } from '../app'

const users = [{ id: 1, name: 'Gui', email: 'email@guiseek.dev' }]

api.get('/users', (req, res) => {
  res.json(users)
})

api.get('/users/:id', (req, res) => {
  const user = users.find((user) => user.id === +req.params.id)

  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }

  res.json(user)
})

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

api.put('/users/:id', (req, res) => {
  req.params.id
})

api.delete('/users/:id', (req, res) => {
  users.splice(
    users.findIndex((u) => u.id === +req.params.id),
    1
  )

  res.json(users)
})

export default api
