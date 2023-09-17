import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as style from './about.module.css'
import Container from './container'

const About = ({ content }) => {
  return (
    <Container>
      <div className={style.body}>{renderRichText(content)}</div>
    </Container>
  )
}
export default About
