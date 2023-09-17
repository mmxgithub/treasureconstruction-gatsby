import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulHomepage {
        footer
      }
    }
  `)

  const homepage = data.contentfulHomepage
  return (
    <Container as="footer">
      <div className={styles.container}>{homepage.footer}</div>
    </Container>
  )
}

export default Footer
