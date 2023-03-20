import { useEffect, useState } from 'react'
// import { useFetch } from 'hooks/useFetch'
import useFormatTemperature from 'hooks/useFormatTemperature'
import { useDispatch, useSelector } from 'react-redux'
import { selectWeather, selectWeatherLoading } from 'redux/weather/selectors'
import { selectUserInfo, selectUserInfoLoading } from 'redux/userInfo/selectors'
import { WEATHER_SEARCH_PARAMS } from 'constants/constants'
import { useFetch } from 'hooks/useFetch'
import { setWeather } from 'redux/weather/weatherSlice'
// import { WEATHER_SEARCH_PARAMS } from 'constants/constants'

const useHome = () => {
  const [search, setSearch] = useState(null)
  const [temperatureKey, setTemperatureKey] = useState('c')
  const { weather } = useSelector(selectWeather)
  const weatherLoading = useSelector(selectWeatherLoading)
  const { userInfo } = useSelector(selectUserInfo)
  const userInfoLoading = useSelector(selectUserInfoLoading)
  const dispatch = useDispatch()
  const { data: weatherData } = useFetch(
    `${process.env.REACT_APP_WEATHER_STACK_URI}${search?.value?.lat},${search?.value?.lng}`,
    WEATHER_SEARCH_PARAMS,
    !search
  )
  useEffect(() => {
    if (search) {
      dispatch(setWeather(weatherData))
    }
  }, [dispatch, weatherData])
  useEffect(() => {
    setTemperatureKey('c')
  }, [])

  const formatTemperature = useFormatTemperature()

  return {
    setSearch,
    search,
    formatTemperature,
    temperatureKey,
    weather,
    userInfo,
    userInfoLoading,
    weatherLoading,
  }
}

export default useHome
