import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import React from 'react'
import Container from 'react-bootstrap/Container'
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <Container className="shadow-sm p-0">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </Container>
)

export default Layout
