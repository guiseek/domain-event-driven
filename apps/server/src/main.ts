import { app } from './app/app'
import './app/sign'

const port = 3333

app.listen(port, () => console.log(`http://localhost:${port}`))
