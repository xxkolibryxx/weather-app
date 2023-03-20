import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { generateWeatherIcon } from 'helpers/common'
import Loading from 'components/Shared/Loading/Loading'
import useFiveDays from './useFiveDays'

const FiveDays = () => {
  const {
    formatTemperature,
    temperatureKey,
    days = [],
    userInfoLoading,
    weatherLoading,
  } = useFiveDays()
  if (userInfoLoading || weatherLoading) return <Loading />
  return (
    <Container className="pt-3">
      <Row>
        {days?.slice(0, 5)?.map((item) => (
          <Col xs={12} md={6} lg={4}>
            {generateWeatherIcon(item?.icon)}
            <div className="border-bottom fs-1 text-warning">
              {formatTemperature({ [temperatureKey]: item?.temp })}
            </div>
            <div className="my-2">
              <span>{item?.datetime}</span>
            </div>
            <div className="my-2">
              <span>{item?.conditions}</span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default FiveDays
