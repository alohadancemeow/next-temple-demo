import React from 'react'

import {
  FooterSection,
  FooterTitle,
  FooterSubtitle,
  FooterLink
} from './styles'

import { BackTop } from 'antd';
import { UpCircleFilled } from '@ant-design/icons'

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

      <BackTop duration={1000} >
        <UpCircleFilled style={{ fontSize: '30px' }} />
      </BackTop>

    </FooterSection>
  )
}

export default Footer