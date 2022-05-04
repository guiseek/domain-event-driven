function usePost(host: string) {
  return async <R, D>(endpoint: string, data: D): Promise<R> => {
    const config = {
      method: 'POST',
      headers: [['Content-Type', 'application/json']],
      body: JSON.stringify(data),
    }

    const url = `${host}/${endpoint}`

    const response = await fetch(url, config)

    if (!response.ok) {
      const err = await response.json()
      throw new Error(err.message)
    }

    return response.json()
  }
}

export default usePost
