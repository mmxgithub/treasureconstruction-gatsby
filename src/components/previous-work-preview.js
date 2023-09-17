import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './previous-work-preview.module.css'

const PreviousWorkPreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <ul className={styles.articleList}>
      {posts.map((post) => {
        return (
          <li key={post.id} className={styles.cardItem}>
            <Link to={`/our-work/${post.service.id}/${post.id}`} className={styles.link}>
              <GatsbyImage alt="" image={post.previewImage.gatsbyImage} />
              <h2 className={styles.title}>{post.name}</h2>
            </Link>
            <div className={styles.description}>
              {post.description.description}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default PreviousWorkPreview
