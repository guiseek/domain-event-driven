import { HttpMethod } from '../index'
import type {
  RequestGet,
  RequestPut,
  RequestPost,
  RequestPatch,
  RequestDelete,
} from '../types/httpRequest'

function httpConfig(method: 'PUT', options?: RequestPut): RequestInit
function httpConfig(method: 'GET', options?: RequestGet): RequestInit
function httpConfig(method: 'POST', options?: RequestPost): RequestInit
function httpConfig(method: 'PATCH', options?: RequestPatch): RequestInit
function httpConfig(method: 'DELETE', options?: RequestDelete): RequestInit
function httpConfig(method: HttpMethod, options?: any): RequestInit {
  const body = JSON.stringify(options?.data ?? null)
  const headers = [['Content-Type', 'application/json']]

  return { body, method, headers, ...options }
}

export default httpConfig
