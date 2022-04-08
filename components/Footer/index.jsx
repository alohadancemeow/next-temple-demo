import React from 'react'

import {
  FooterSection,
  FooterTitle,
  FooterSubtitle,
  FooterLink
} from './styles'

const Footer = () => {
  return (
    <FooterSection>
      <FooterTitle>
        Temple-demo.
      </FooterTitle>
      <FooterSubtitle>
        <span>© 2022 Created by {' '}</span>
        <FooterLink
          // href='https://github.com/alohadancemeow'
          // target='_blank'
        >
          @3rd_rabbitGo
        </FooterLink>
      </FooterSubtitle>
    </FooterSection>
  )
}

export default Footer