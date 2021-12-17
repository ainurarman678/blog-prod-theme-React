import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import styles from './nav.module.css'

const Nav = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['Link']}>{props.text}</span>
      <Link to="/category" className={styles['Link1']}>
        {props.text1}
      </Link>
      <span className={styles['Text']}>{props.text2}</span>
      <span className={styles['Text1']}>{props.text3}</span>
    </nav>
  )
}

Nav.defaultProps = {
  text2: 'Blog Series',
  text1: 'Category',
  rootClassName: '',
  text: 'Blog',
  text3: 'About Me',
}

Nav.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
}

export default Nav
