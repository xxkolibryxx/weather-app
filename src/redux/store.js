import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weather/weatherSlice'
import userInfoReducer from './userInfo/userInfoSlice'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    userInfo: userInfoReducer,
  },
})
