import React from 'react'

import ProductSection1 from './Products/ProductSection1'
import ProductSection2 from './Products/ProductSection2'
import {
    ContentSection,
    ContenWrapper,
    TextBox,
    Header,
    Paragraph,
    TextLink,
    SubHeadLine,
    Label,
    Line,
    ProductBox,
    ProductWrapper,
    ProductWrapper2
} from './styles'

const fakeProduct1 = [
    { id: '1', desc: 'product01', image: '/image1.jpg' },
    { id: '2', desc: 'product02', image: '/image2.jpg' },
]
const fakeProduct2 = [
    { id: '1', desc: 'product01', image: '/image1.jpg' },
    { id: '2', desc: 'product02', image: '/image2.jpg' },
    { id: '3', desc: 'product03', image: '/image1.jpg' },
    { id: '4', desc: 'product04', image: '/image2.jpg' },
    { id: '5', desc: 'product05', image: '/image1.jpg' },
    { id: '6', desc: 'product06', image: '/image2.jpg' },
]

const Content = () => {
    return (
        <ContentSection>
            <ContenWrapper>
                <TextBox>
                    <Header>Content Header</Header>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo facilis porro illum magni molestias asperiores rem odio quasi. Et, possimus ducimus cupiditate voluptatibus consequatur itaque minima dolorem magnam cumque!</Paragraph>
                    <TextLink>
                        <span>Read more</span>
                    </TextLink>
                </TextBox>

                <SubHeadLine>
                    <Line />
                    <Label>Our Products</Label>
                    <Line />
                </SubHeadLine>

                <ProductBox>
                    <ProductWrapper>
                        {fakeProduct1.map(item => (
                            <ProductSection1 item={item} key={item.id} />
                        ))}
                    </ProductWrapper>
                </ProductBox>

                <SubHeadLine>
                    <Line />
                    <Label>More Products</Label>
                    <Line />
                </SubHeadLine>

                <ProductBox>
                    <ProductWrapper2>
                        {fakeProduct2.map(item => (
                            <ProductSection2 item={item} key={item.id} />
                        ))}
                    </ProductWrapper2>
                </ProductBox>

            </ContenWrapper>
        </ContentSection>
    )
}

export default Content