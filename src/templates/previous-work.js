import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import Layout from '../components/layout'

import * as style from './previous-work.module.css'
import Container from '../components/container'
import PreviousWorkGallery from '../components/previous-work-gallery'
import HomepageHero from '../components/homepageHero'

class ServiceTemplate extends React.Component {
  render() {
    const works = get(this, 'props.data.contentfulPreviousWorks')

    return (
      <Layout location={this.props.location}>
        <HomepageHero />
        <Container>
          <div className={style.title}>{works.name}</div>
          <div className={style.description}>
            {works.description.description}
          </div>
          <PreviousWorkGallery images={works.images} />
        </Container>
      </Layout>
    )
  }
}

export default ServiceTemplate

export const pageQuery = graphql`
  query ($id: String) {
    contentfulPreviousWorks(id: { eq: $id }) {
      id
      images {
        gatsbyImage(layout: FULL_WIDTH, width: 800, placeholder: BLURRED)
        url
      }
      name
      description {
        description
      }
    }
  }
`
