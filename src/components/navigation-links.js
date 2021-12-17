import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <Link to="/" className={styles['navlink']}>
        {props.text}
      </Link>
      <span className={styles['text']}>{props.text1}</span>
      <span className={styles['text1']}>{props.text2}</span>
      <span className={styles['text2']}>{props.text3}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Blog Series',
  text1: 'Category',
  rootClassName: '',
  text: 'Home',
  text3: 'About Me',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
