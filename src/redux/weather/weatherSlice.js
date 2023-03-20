/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit'
import { reducers } from './reducers'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    loading: false,
  },
  reducers,
})
export const { setWeather, setWeatherLoading } = weatherSlice.actions
export default weatherSlice.reducer
