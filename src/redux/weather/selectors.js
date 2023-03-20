export const selectWeather = (state) => state.weather
export const selectWeatherLoading = (state) => state.weather.loading
export const selectWeatherTemp = (state) => state.weather?.weather?.currentConditions?.temp
export const selectWeatherDays = (state) => state.weather?.weather?.days
