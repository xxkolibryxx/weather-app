import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Layout from 'components/Layout/Layout'
import Home from 'components/Home/Home'
import FiveDays from 'components/FiveDays/FiveDays'
import { WEATHER_SEARCH_PARAMS } from 'constants/constants'
import { useFetch } from 'hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setWeather, setWeatherLoading } from 'redux/weather/weatherSlice'
import { setUserInfo, setUserInfoLoading } from 'redux/userInfo/userInfoSlice'

function App() {
  const dispatch = useDispatch()
  const { data: userInfo, loading: userInfoLoading } = useFetch(
    process.env.REACT_APP_IP_WHO_API_URL
  )
  const { data: weather, loading: weatherLoading } = useFetch(
    `${process.env.REACT_APP_WEATHER_STACK_URI}${`${userInfo?.latitude},${userInfo?.longitude}`}`,
    WEATHER_SEARCH_PARAMS,
    !userInfo
  )
  useEffect(() => {
    dispatch(setWeather(weather))
    dispatch(setWeatherLoading(weatherLoading))
    dispatch(setUserInfoLoading(userInfoLoading))
    dispatch(setUserInfo(userInfo))
  }, [dispatch, weather, userInfo])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="five-days" element={<FiveDays />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
