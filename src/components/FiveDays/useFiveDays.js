import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectWeatherDays, selectWeatherLoading } from 'redux/weather/selectors'
import useFormatTemperature from 'hooks/useFormatTemperature'
import { selectUserInfoLoading } from 'redux/userInfo/selectors'

const useFiveDays = () => {
  const [temperatureKey, setTemperatureKey] = useState('c')
  const days = useSelector(selectWeatherDays)
  const weatherLoading = useSelector(selectWeatherLoading)
  const userInfoLoading = useSelector(selectUserInfoLoading)

  useEffect(() => {
    setTemperatureKey('c')
  }, [])
  const formatTemperature = useFormatTemperature()

  return {
    days,
    formatTemperature,
    temperatureKey,
    weatherLoading,
    userInfoLoading,
  }
}

export default useFiveDays
