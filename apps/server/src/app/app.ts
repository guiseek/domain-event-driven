import express, { Request, Response, RequestHandler } from 'express'
import { PathArgs } from '../types/path-args'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.json())

type RouterHandler<P extends string, B = any> = (
  req: Request<PathArgs<P>, B>,
  res: Response<B>,
  ...next: RequestHandler<PathArgs<P>>[]
) => void

const api = {
  get<P extends string>(path: P, handler: RouterHandler<P>): void {
    app.get(path, handler)
  },

  post<P extends string, B = any>(path: P, handler: RouterHandler<P, B>): void {
    app.post(path, handler)
  },

  put<P extends string, B = any>(path: P, handler: RouterHandler<P, B>): void {
    app.put(path, handler)
  },

  patch<P extends string, B = any>(
    path: P,
    handler: RouterHandler<P, B>
  ): void {
    app.patch(path, handler)
  },

  delete<P extends string>(path: P, handler: RouterHandler<P>): void {
    app.delete(path, handler)
  },

  options<P extends string, B = any>(
    path: P,
    handler: RouterHandler<P, B>
  ): void {
    app.options(path, handler)
  },

  all<P extends string, B = any>(path: P, handlers: RouterHandler<P, B>): void {
    app.all(path, handlers)
  },
}

export { app, api }
