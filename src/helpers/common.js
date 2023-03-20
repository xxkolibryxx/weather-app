/* eslint-disable react/react-in-jsx-scope */
export const generateWeatherIcon = (title) => (
  <img
    src={`${process.env.REACT_APP_BASE_URL}/images/icons/weather_icons/${title}.png`}
    alt={title}
  />
)
