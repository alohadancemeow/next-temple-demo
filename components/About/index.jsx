import React from 'react'

import {
    SubHeadLine,
    Label,
    Line,
} from '../elememtStyles'
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
} from './styles'

const AboutPage = () => {
    return (
        <>
            <Container>
                <ContentWrapper>
                    <Content>
                        <HeadLineWrapper>
                            <HeadLine>About</HeadLine>
                            <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ut sed modi quo dicta, animi porro reprehenderit incidunt repellendus est fugit placeat voluptates minima odit ab, esse autem recusandae. Repudiandae expedita quas libero necessitatibus tempore reiciendis dolores mollitia? Nulla corporis perferendis eaque assumenda molestias animi error reprehenderit alias et magni!</Paragraph>
                        </HeadLineWrapper>
                    </Content>
                </ContentWrapper>


                <MainWrapper>
                    <MainContent>
                        <MainImage
                            preview={false}
                            src='/image2.jpg'
                            alt='image'
                        />

                        <SubHeadLine>
                            <Line />
                            <Label>INTRODUCTIONS</Label>
                            <Line />
                        </SubHeadLine>

                        <MainText>
                            <Header>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, incidunt.</Header>
                            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cupiditate sint! Nobis accusantium atque, expedita labore, fugit rerum ab reprehenderit asperiores ipsa dolorum optio a corrupti animi, deleniti sit repellendus?</Paragraph>
                        </MainText>

                    </MainContent>
                </MainWrapper>

            </Container>
        </>
    )
}

export default AboutPage