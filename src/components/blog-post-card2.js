import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card2.module.css'

const BlogPostCard2 = (props) => {
  return (
    <div
      className={` ${styles['BlogPostCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className={styles['image']}
      />
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>{props.label}</span>
          <span className={styles['text1']}>{props.when}</span>
        </div>
        <h1 className={styles['text2']}>{props.title}</h1>
        <div className={styles['Container2']}>
          <div className={styles['Profile']}>
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              className={styles['image1']}
            />
            <span className={styles['text3']}>{props.author}</span>
          </div>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link']}
          >
            Read More -&gt;
          </a>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1500',
  rootClassName: '',
  image_alt: 'image',
  label: 'ENTERPRISE',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200',
  title: 'Lorem ipsum dolor sit amet',
  profile_alt: 'profile',
  when: '3 days ago',
  author: 'Jane Doe',
}

BlogPostCard2.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  label: PropTypes.string,
  profile_src: PropTypes.string,
  title: PropTypes.string,
  profile_alt: PropTypes.string,
  when: PropTypes.string,
  author: PropTypes.string,
}

export default BlogPostCard2
