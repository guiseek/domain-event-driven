import { Json } from '../types/json'

function useRepository() {
  return (url: string) => ({
    get: async <T>(endpoint: string): Promise<T> => {
      return fetch(`${url}/${endpoint}`).then((res) => res.json())
    },
    post: async <T, D>(endpoint: string, data: D): Promise<T> => {
      return fetch(`${url}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
      }).then((res) => res.json())
    },
    put: async <T, D>(endpoint: string, data: Partial<D>): Promise<T> => {
      return fetch(`${url}/${endpoint}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }).then((res) => res.json())
    },
    patch: async <T, D>(endpoint: string, data: Partial<D>): Promise<T> => {
      return fetch(`${url}/${endpoint}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
      }).then((res) => res.json())
    },
    remove: async <T>(endpoint: string): Promise<T> => {
      return fetch(`${url}/${endpoint}`, {
        method: 'DELETE',
      }).then((res) => res.json())
    },
  })
  //   // const get = async <R extends keyof Output>(endpoint: string): Promise<R> =>
  //   //   fetch(`${url}/${endpoint}`).then((res) => res.json())

  //   // const post = async <K extends keyof Input, R extends keyof Output>(
  //   //   endpoint: string,
  //   //   body: [K]
  //   // ): Promise<R> => {
  //   //   return fetch(`${url}/${endpoint}`, {
  //   //     method: 'POST',
  //   //     body: JSON.stringify(body),
  //   //   }).then((res) => res.json())
  //   // }

  //   return { get, post, put, patch, delete }
  // }
}

export default useRepository()
export abstract class HttpClient {
  abstract get<T>(url: string): Promise<T>
  abstract post<T, D>(url: string, data: D): Promise<T>
  abstract put<T, D>(url: string, data: Partial<D>): Promise<T>
  abstract patch<T, D>(url: string, data: Partial<D>): Promise<T>
  abstract delete<T>(url: string): Promise<T>
}
