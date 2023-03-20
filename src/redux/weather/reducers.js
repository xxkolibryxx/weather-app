/* eslint-disable no-param-reassign */

export const reducers = {
  setWeather: (state, action) => {
    state.weather = action.payload
  },
  setWeatherLoading: (state, action) => {
    state.loading = action.payload
  },
}
