import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Hero from './hero'

const HomepageHero = () => {
  const data = useStaticQuery(graphql`
    query heroQuery {
      contentfulHomepage(contentful_id: { eq: "3HwiYJ2XCU6xSfplACzTSm" }) {
        companyNameth
        companyNameen
        heroImage {
          gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1920)
        }
      }
    }
  `)
  const homepage = data.contentfulHomepage
  return (
    <Hero
      image={homepage.heroImage.gatsbyImage}
      title={homepage.companyNameen}
      content={homepage.companyNameth}
    />
  )
}

export default HomepageHero
