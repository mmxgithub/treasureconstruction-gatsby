import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import Layout from '../components/layout'

import * as style from './service.module.css'
import Container from '../components/container'
import PreviousWorkPreview from '../components/previous-work-preview'
import HomepageHero from '../components/homepageHero'

class ServiceTemplate extends React.Component {
  render() {
    const service = get(this, 'props.data.contentfulService')
    const works = get(this, 'props.data.allContentfulPreviousWorks.nodes')

    return (
      <Layout location={this.props.location}>
        <HomepageHero />
        <Container>
          <div className={style.title}>ผลงาน{service.name}</div>
          <PreviousWorkPreview posts={works} />
        </Container>
      </Layout>
    )
  }
}

export default ServiceTemplate

export const pageQuery = graphql`
  query ($id: String) {
    contentfulService(id: { eq: $id }) {
      id
      name
    }
    allContentfulPreviousWorks(filter: { service: { id: { eq: $id } } }) {
      nodes {
        description {
          description
        }
        id
        previewImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 800
            aspectRatio: 2
          )
        }
        name
        service {
          id
        }
      }
    }
  }
`
