import React, { useState, useEffect, useRef } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import * as styles from './navigation.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulHomepage {
        companyNameen
        logo {
          gatsbyImage(width: 48, aspectRatio: 1)
        }
      }
      allContentfulService {
        nodes {
          id
          name
        }
      }
    }
  `)

  const services = data.allContentfulService.nodes
  const homepage = data.contentfulHomepage

  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false)
  const blogDropdownRef = useRef(null)

  const toggleBlogDropdown = () => {
    setIsBlogDropdownOpen(!isBlogDropdownOpen)
  }

  const closeBlogDropdown = () => {
    setIsBlogDropdownOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleClickOutside = (event) => {
    if (
      blogDropdownRef.current &&
      !blogDropdownRef.current.contains(event.target)
    ) {
      closeBlogDropdown()
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeBlogDropdown()
    }
  }

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <div className={styles.logo}>
          <GatsbyImage image={homepage.logo.gatsbyImage} />
        </div>
        <span className={styles.navigationItem}>{homepage.companyNameen}</span>
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/" activeClassName="active">
            หน้าแรก
          </Link>
        </li>
        <li
          className={`${styles.navigationItem} ${styles.dropdownItem}`}
          onClick={toggleBlogDropdown}
          ref={blogDropdownRef}
        >
          <span>ผลงานของเรา &#x25BE;</span>
          {isBlogDropdownOpen && (
            <ul className={styles.dropdownList}>
              {services.map((service) => (
                <li>
                  <Link to={`/our-work/${service.id}`} activeClassName="active">
                    <span style={{ display: 'block' }}>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={styles.navigationItem}>
          <Link to="/contact-us" activeClassName="active">
            ติดต่อเรา
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
