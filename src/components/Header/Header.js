import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useBrakePoints from 'hooks/useBrakePoints'
// Bootstrap Components
import Navigation from 'components/Navigation/Navigation'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Logo from 'assets/images/logo.png'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import MenuIcon from 'assets/images/icons/bars.svg'
// Stylesheet
import clsx from 'clsx'
import useStyles from './style'

function Header() {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const { isTablet } = useBrakePoints()
  const handleShowAndHide = () => setShow((prev) => !prev)
  return (
    <header className={clsx('shadow-sm')}>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Link to="/">
            <div className={clsx(classes.logo)}>
              <img
                src={Logo}
                alt="Logo"
                className={clsx('img-fluid', classes.logo)}
                width={150}
                height={60}
              />
            </div>
          </Link>
          <Button
            variant="none"
            onClick={() => {
              handleShowAndHide()
            }}
            className="d-block d-lg-none fs-2"
            aria-label="menu-button"
          >
            <img src={MenuIcon} alt="menu-icon" width={30} height={30} />
          </Button>
          {isTablet ? (
            <Offcanvas show={show} onHide={handleShowAndHide} placement="end">
              <Offcanvas.Header closeButton className={clsx('justify-content-end')} />
              <Offcanvas.Body>
                <Navigation onClose={handleShowAndHide} />
              </Offcanvas.Body>
            </Offcanvas>
          ) : (
            <Navigation />
          )}
        </Container>
      </Navbar>
    </header>
  )
}
export default Header
