import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Tooltip } from 'antd';
import { BlockOutlined } from '@ant-design/icons'
import { NavWrapper, NavLogo, NavigationMenu, MenuWrapper, NavLink, CopyButton } from './styles'


const navMenus = [
  { id: 1, text: 'about', href: '/about' },
  { id: 2, text: 'contact', href: '#contact' },
]

const Nav = () => {

  const [copied, setCopied] = useState(false);
  const [path, setPath] = useState('')

  const router = useRouter()
  console.log(router);


  // handle copy
  const copy = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

  useEffect(() => {
    setPath(router.asPath)
  }, [])

  return (
    <NavWrapper>
      <NavLogo>
        <Link href='/'>
          <a>Temple-demo.</a>
        </Link>
      </NavLogo>

      <MenuWrapper>
        <NavigationMenu>

          {navMenus.map(menu => (
            <Link key={menu.id} href={menu.href}>
              <NavLink active={menu.href === path}>
                {menu.text}
              </NavLink>
            </Link>
          ))}
        </NavigationMenu>

        <Tooltip placement="right" title='Copy link!' autoAdjustOverflow>
          <CopyButton onClick={copy} >
            {!copied
              ? <BlockOutlined />
              : <BlockOutlined style={{ color: '#a25f4b' }} />
            }
          </CopyButton>
        </Tooltip>

      </MenuWrapper>
    </NavWrapper >
  )
}

export default Nav