import { useCallback, useEffect, useState } from 'react'
import api from 'api/api'

export function useFetch(url, config, skip = false, method = 'get') {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const refetch = useCallback(async () => {
    try {
      setLoading(true)
      const response = await api[method](url, config || {})
      setData(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }

    return {
      data,
      loading,
      error,
    }
  }, [url, method])

  useEffect(() => {
    if (skip) return
    refetch()
  }, [refetch, skip])

  return {
    data,
    loading,
    error,
    refetch,
  }
}
