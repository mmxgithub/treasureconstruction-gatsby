import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/our-work/${post.id}`} className={styles.link}>
                <GatsbyImage alt="" image={post.image.gatsbyImage} />
                <h2 className={styles.title}>{post.name}</h2>
              </Link>
              <div>
                {post.description?.raw && renderRichText(post.description)}
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
