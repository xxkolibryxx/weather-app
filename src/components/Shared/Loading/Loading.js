import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import useStyles from './style'

function Loading({ ...restProps }) {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Spinner {...restProps} animation="grow" variant="success" />
    </div>
  )
}

export default Loading
