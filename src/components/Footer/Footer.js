import React from 'react'
import Container from 'react-bootstrap/Container'
import clsx from 'clsx'
import useStyles from './style'

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={clsx('py-3 mt-5', classes.wrapper)}>
      <Container>
        <p className="m-0 text-center text-white">Designed and developed by Artyom Harutyunyan</p>
      </Container>
    </footer>
  )
}
export default Footer
