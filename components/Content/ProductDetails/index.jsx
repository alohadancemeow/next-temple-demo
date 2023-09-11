import React from 'react'
import Link from 'next/link'

// same as about page, just now only
import {
    Container,
    ContentWrapper,
    Content,
    HeadLineWrapper,
    HeadLine,
    Paragraph,
    MainWrapper,
    MainContent,
    MainImage,
    MainText,
    Header
} from '../../About/styles'

import {
    SubHeadLine,
    Label,
    Line,
} from '../../elememtStyles'

// reusing product card, just now only
import { fakeProduct1 } from '../../Content'
import { ProductBox, ProductWrapper } from '../styles'

import ProductSection2 from '../Products/ProductSection2'


const ProductDetailPage = ({ product }) => {
    return (
        <>
            <Container>
                <ContentWrapper>
                    <Content>
                        <HeadLineWrapper>
                            <HeadLine>{product.desc}</HeadLine>
                            <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ut sed modi quo dicta, animi porro reprehenderit incidunt repellendus est fugit placeat voluptates minima odit ab, esse autem recusandae. Repudiandae expedita quas libero necessitatibus tempore reiciendis dolores mollitia? Nulla corporis perferendis eaque assumenda molestias animi error reprehenderit alias et magni!</Paragraph>
                        </HeadLineWrapper>
                    </Content>
                </ContentWrapper>
            </Container>

            <MainWrapper>
                <MainContent>
                    <MainImage
                        preview={false}
                        src={product.image}
                        alt='image'
                    />

                    <SubHeadLine>
                        <Line />
                        <Label>More Details</Label>
                        <Line />
                    </SubHeadLine>

                    <MainText>
                        <Header>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, incidunt.</Header>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cupiditate sint! Nobis accusantium atque, expedita labore, fugit rerum ab reprehenderit asperiores ipsa dolorum optio a corrupti animi, deleniti sit repellendus?</Paragraph>
                    </MainText>

                    <SubHeadLine>
                        <Line />
                        <Label>YOU MIGHT ALSO LIKE THESE</Label>
                        <Line />
                    </SubHeadLine>

                    <ProductBox>
                        <ProductWrapper>
                            {fakeProduct1.map(item => (
                                <Link key={item.id} href={`/product/${item.id}`}>
                                    <ProductSection2 item={item} />
                                </Link>
                            ))}
                        </ProductWrapper>
                    </ProductBox>

                </MainContent>
            </MainWrapper>
        </>
    )
}

export default ProductDetailPage