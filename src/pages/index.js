import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import About from '../components/about'
import HomepageHero from '../components/homepageHero'

class RootIndex extends React.Component {
  render() {
    const homepage = get(this, 'props.data.contentfulHomepage')
    const services = get(this, 'props.data.allContentfulService.nodes')

    return (
      <Layout location={this.props.location}>
        <HomepageHero />
        <About content={homepage.about} />
        <ArticlePreview posts={services} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query {
    contentfulHomepage {
      about {
        raw
      }
      companyNameth
      companyNameen
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1920)
      }
    }
    allContentfulService {
      nodes {
        id
        image {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 800
            aspectRatio: 2
          )
        }
        name
        description {
          raw
        }
      }
    }
  }
`
