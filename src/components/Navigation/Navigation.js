import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import clsx from 'clsx'
import { useLinkStyles } from 'shared/styles/linkStyles'
import useStyles from './style'

const Navigation = ({ onClose = () => {} }) => {
  const linkClasses = useLinkStyles()
  const classes = useStyles()
  return (
    <div className={clsx('d-flex flex-fill flex-column flex-lg-row justify-content-between')}>
      <Nav
        className={clsx(
          'justify-content-end flex-fill align-items-start align-items-lg-center',
          classes.navigationWrapper
        )}
      >
        <Link to="/" className={clsx('nav-link', linkClasses.link)} onClick={onClose}>
          Today
        </Link>
        <Link to="/five-days" className={clsx('nav-link', linkClasses.link)} onClick={onClose}>
          5 days
        </Link>
      </Nav>
    </div>
  )
}
export default Navigation
