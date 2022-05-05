import httpConfig from '../utils/httpConfig'

function useDelete(host: string, signal?: AbortSignal) {
  const config = httpConfig('DELETE', { signal })

  return async <R>(
    endpoint: string,
    params?: Record<string, string>
  ): Promise<R> => {
    const query = new URLSearchParams(params)

    const url = `${host}/${endpoint}/?${query.toString()}`

    const response = await fetch(url, config)

    if (!response.ok) {
      const err = await response.json()
      throw new Error(err.message)
    }

    return response.json()
  }
}

export { useDelete }
