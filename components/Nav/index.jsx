import React from 'react'
import Link from 'next/link'

import { NavWrapper, NavLogo, NavigationMenu } from './styles'

const Nav = () => {
  return (
    <NavWrapper>
      <NavLogo>
        <Link href='/'>
          <a>Temple-demo.</a>
        </Link>
      </NavLogo>
      <NavigationMenu>
        <Link href='/about'>
          <a>about</a>
        </Link>
        <Link href='#contact'>
          <a>contact</a>
        </Link>
        <Link href='/'>
          <a>product</a>
        </Link>
      </NavigationMenu>
    </NavWrapper>
  )
}

export default Nav