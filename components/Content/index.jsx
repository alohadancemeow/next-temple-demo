import React from 'react'
import Link from 'next/link'

import ProductSection1 from './Products/ProductSection1'
import ProductSection2 from './Products/ProductSection2'
import {
    ContentSection,
    ContenWrapper,
    TextBox,
    Header,
    Paragraph,
    TextLink,
    ProductBox,
    ProductWrapper,
} from './styles'

import {
    SubHeadLine,
    Label,
    Line,
} from '../elememtStyles'

import { Carousel } from 'antd'

export const fakeProduct1 = [
    { id: '1', desc: 'product01', image: '/image1.jpg' },
    { id: '2', desc: 'product02', image: '/image2.jpg' },
    { id: '3', desc: 'product03', image: '/image1.jpg' },
]
export const fakeProduct2 = [
    { id: '1', desc: 'product01', image: '/image1.jpg' },
    { id: '2', desc: 'product02', image: '/image2.jpg' },
    { id: '3', desc: 'product03', image: '/image1.jpg' },
    { id: '4', desc: 'product04', image: '/image2.jpg' },
    { id: '5', desc: 'product05', image: '/image1.jpg' },
    { id: '6', desc: 'product06', image: '/image2.jpg' },
]


const Content = () => {
    return (
        <ContentSection id='content'>
            <ContenWrapper>
                <TextBox>
                    <Header>Content Header</Header>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo facilis porro illum magni molestias asperiores rem odio quasi. Et, possimus ducimus cupiditate voluptatibus consequatur itaque minima dolorem magnam cumque!</Paragraph>
                    <Link href='/about'>
                        <TextLink>Read more</TextLink>
                    </Link>
                </TextBox>

                <SubHeadLine>
                    <Line />
                    <Label>Our Products</Label>
                    <Line />
                </SubHeadLine>

                <ProductBox>
                    <Carousel
                        autoplay
                        draggable
                        dotPosition='top'
                    >
                        {fakeProduct1.map(item => (
                            <div style={{ width: 'fit-content' }} key={item.id}>
                                <ProductSection1 item={item} key={item.id} />
                            </div>
                        ))}
                    </Carousel>
                </ProductBox>

                <SubHeadLine>
                    <Line />
                    <Label>More Products</Label>
                    <Line />
                </SubHeadLine>

                <ProductBox>
                    <ProductWrapper>
                        {fakeProduct2.map(item => (
                            <Link key={item.id} href={`/product/${item.id}`}>
                                <a>
                                    <ProductSection2 item={item} />
                                </a>
                            </Link>
                        ))}
                    </ProductWrapper>
                </ProductBox>

            </ContenWrapper>
        </ContentSection>
    )
}

export default Content