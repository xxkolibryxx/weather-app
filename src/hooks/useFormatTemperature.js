import { useCallback } from 'react'

const useFormatTemperature = () => {
  const formatTemperature = useCallback(({ f, c }) => {
    if (Number.isNaN(c) || Number.isNaN(f)) return null
    if (typeof f === 'number') return `${(f * 1.8 + 32).toFixed(1)} °F`
    if (typeof c === 'number') return `${c.toFixed(1)} °C`
    return null
  }, [])
  return formatTemperature
}
export default useFormatTemperature
