import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card1.module.css'

const BlogPostCard1 = (props) => {
  return (
    <div
      className={` ${styles['BlogPostCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <span className={styles['text']}>{props.label}</span>
        <span className={styles['text1']}>{props.title}</span>
        <span className={styles['text2']}>{props.description}</span>
        <div className={styles['Container1']}>
          <div className={styles['Profile']}>
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className={styles['image1']}
            />
            <span className={styles['text3']}>{props.author}</span>
          </div>
          <span className={styles['text4']}>{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  â Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ââ ipsum dolor sit amet, consectetur adipiscing elit.',
  profile_alt: 'profile',
  time: '5 min read',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  image_alt: 'image',
  author: 'Jon Doe',
  label: 'ENTERPRISE',
  title: 'Lorem ipsum dolor sit amet',
}

BlogPostCard1.propTypes = {
  profile_src: PropTypes.string,
  description: PropTypes.string,
  profile_alt: PropTypes.string,
  time: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  author: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
}

export default BlogPostCard1
