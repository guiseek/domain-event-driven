import {
  useGet,
  usePut,
  usePost,
  usePatch,
  useDelete,
} from '../../core/http/index'

export default {
  get: useGet('http://localhost:3333/sign'),
  put: usePut('http://localhost:3333/sign'),
  post: usePost('http://localhost:3333/sign'),
  patch: usePatch('http://localhost:3333/sign'),
  delete: useDelete('http://localhost:3333/sign'),
}
