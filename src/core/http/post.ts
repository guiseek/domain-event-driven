import httpConfig from '../utils/httpConfig'

function usePost(host: string, signal?: AbortSignal) {
  return async <R, D>(endpoint: string, data: D): Promise<R> => {
    const config = httpConfig('POST', { signal, data })

    const url = `${host}/${endpoint}`

    const response = await fetch(url, config)

    if (!response.ok) {
      const err = await response.json()
      throw new Error(err.message)
    }

    return response.json()
  }
}

export { usePost }
