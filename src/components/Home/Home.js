import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from 'components/Shared/Loading/Loading'
import SelectInput from 'components/Shared/SelectInput/SelectInput'
import { generateWeatherIcon } from 'helpers/common'
import useHome from './useHome'

const Home = () => {
  const {
    search,
    setSearch,
    formatTemperature,
    temperatureKey,
    weather,
    userInfo,
    userInfoLoading,
    weatherLoading,
  } = useHome()
  if (userInfoLoading || weatherLoading) return <Loading />
  return (
    <Container>
      <SelectInput value={search} setValue={setSearch} />
      <Row md={6} xs={12}>
        <Col className="flex-fill">
          <h2 className="fs-3">{search?.label || userInfo?.city}</h2>
          <span>{weather?.currentConditions?.datetime}</span>
          <div className="border-bottom fs-1 text-warning">
            {formatTemperature({ [temperatureKey]: weather?.currentConditions?.temp })}
          </div>
          <div className="my-2">
            <span>{weather?.currentConditions?.conditions}</span>
          </div>
        </Col>
        <Col className="flex-fill">
          <div>{generateWeatherIcon(weather?.currentConditions?.icon)}</div>
          <div className="d-flex flex-wrap justify-content-between">
            <p className="mx-2">
              <b>Sunrise at</b>
              <span className="ms-2">{weather?.currentConditions?.sunrise}</span>
            </p>
            <p className="mx-2">
              <b>Sunset at</b>
              <span className="ms-2">{weather?.currentConditions?.sunset}</span>
            </p>
            <p className="mx-2">
              <b>Windspeed</b>
              <span className="ms-2">{weather?.currentConditions?.windspeed}</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Home
