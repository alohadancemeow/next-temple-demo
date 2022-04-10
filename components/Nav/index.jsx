import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Tooltip, Drawer } from 'antd';
import { BlockOutlined, AppstoreOutlined, FacebookFilled, TwitterSquareFilled, InstagramFilled } from '@ant-design/icons'
import {
  NavWrapper,
  NavLogo,
  NavigationMenu,
  MenuWrapper,
  NavLink,
  CopyButton,
  MobileButton,
  MobileMenuWrapper,
  MobileIconWrapper
} from './styles'


const navMenus = [
  { id: 1, text: 'about', href: '/about' },
  { id: 2, text: 'contact', href: '#contact' },
]

const Nav = () => {

  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const [path, setPath] = useState('')

  const router = useRouter()
  // console.log(router);


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

      <MobileButton onClick={() => setVisible(true)}>
        <AppstoreOutlined style={{ fontSize: '25px' }} />
      </MobileButton>

      <Drawer
        // title="Basic Drawer"
        closeIcon={false}
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
      // size='large'
      >

        <MobileMenuWrapper>
          <NavigationMenu>
            <Link href='/'>
              <NavLink
                active={path === '/'}
                onClick={() => setVisible(false)}
              >
                home
              </NavLink>
            </Link>
            {navMenus.map(menu => (
              <Link key={menu.id} href={menu.href}>
                <NavLink
                  active={menu.href === path}
                  onClick={() => setVisible(false)}
                >
                  {menu.text}
                </NavLink>
              </Link>
            ))}
          </NavigationMenu>

          <MobileIconWrapper>
            <div>
              <Tooltip placement="right" title='Copy link!' autoAdjustOverflow>
                <CopyButton onClick={copy} >
                  {!copied
                    ? <BlockOutlined style={{ fontSize: '25px', color: 'gray' }} />
                    : <BlockOutlined style={{ fontSize: '25px', color: '#a25f4b' }} />
                  }
                </CopyButton>
              </Tooltip>
              <CopyButton>
                <FacebookFilled style={{ fontSize: '25px', color: 'gray' }} />
              </CopyButton>
              <CopyButton>
                <TwitterSquareFilled style={{ fontSize: '25px', color: 'gray' }} />
              </CopyButton>
              <CopyButton>
                <InstagramFilled style={{ fontSize: '25px', color: 'gray' }} />
              </CopyButton>

            </div>

            <NavLogo>
              <Link href='/'>
                <a style={{ fontSize: '18px' }}>Temple-demo.</a>
              </Link>
            </NavLogo>
          </MobileIconWrapper>
        </MobileMenuWrapper>

      </Drawer>

    </NavWrapper >
  )
}

export default Nav