import React from 'react'
import Container from './container'

import * as style from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLine, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = ({ contact }) => (
  <Container>
    <div className={style.title}>ติดต่อเรา</div>
    <div className={style.companyName}>{contact.companyName}</div>
    <div className={style.address}>{contact.address}</div>
    <div >
      <FontAwesomeIcon icon={faPhone} />
      <a className={style.listText} href={`tel:${contact.phoneNumber}`}>
        {contact.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
      </a>
    </div>
    <div >
      <FontAwesomeIcon icon={faEnvelope} />
      <a className={style.listText} href={`mailto:${contact.email}`}>{contact.email}</a>
    </div>
    <div >
      <FontAwesomeIcon icon={faSquareFacebook} />
      <a className={style.listText} href={contact.facebookUrl}>{contact.facebook}</a>
    </div>
    <div >
      <FontAwesomeIcon icon={faLine} />
      <a className={style.listText} href={contact.lineUrl}>{contact.line}</a>
    </div>
  </Container>
)

export default Contact
