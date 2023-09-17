import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './previous-work-gallery.module.css'

const PreviousWorkGallery = ({ images }) => {
  if (!images) return null
  if (!Array.isArray(images)) return null

  return (
    <ul className={styles.articleList}>
      {images.map((image) => {
        return (
          <li key={image.id} className={styles.cardItem}>
            <Link to={image.url} className={styles.link}>
              <GatsbyImage alt="" image={image.gatsbyImage} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default PreviousWorkGallery
