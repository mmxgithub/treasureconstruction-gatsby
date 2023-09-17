import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import HomepageHero from '../components/homepageHero'
import Contact from '../components/contact'

class RootIndex extends React.Component {
  render() {
    const contact = get(this, 'props.data.contentfulContact')

    return (
      <Layout location={this.props.location}>
        <HomepageHero />
        <Contact contact={contact} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query {
    contentfulContact(contentful_id: {eq: "3V0Vos3rPyQDFdFwrFBdhV"}) {
      address
      companyName
      email
      facebook
      facebookUrl
      line
      lineUrl
      phoneNumber
    }
  }
`
