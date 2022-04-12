import React from 'react'

import {
    ContactSection,
    ContactWrapper,
    Content,
    MapBox,
    TextBox,
    Text,
    HeadlineWrapper,
    HeaderLine,
    LabelName,
    Paragraph
} from './styles'

import {
    SubHeadLine,
    Label,
    Line,
} from '../elememtStyles'

const Contact = () => {
    return (
        <>
            <SubHeadLine>
                <Line />
                <Label>Contact us</Label>
                <Line />
            </SubHeadLine>

            <ContactSection id='contact'>
                <ContactWrapper>
                    <Content>
                        <MapBox>
                            <Text>
                                <HeadlineWrapper>
                                    <HeaderLine>&quot;</HeaderLine>
                                    <LabelName>Put the right man in the right job.</LabelName>
                                    <Paragraph> - Someone said - </Paragraph>
                                    <HeaderLine>&quot;</HeaderLine>
                                </HeadlineWrapper>
                            </Text>
                        </MapBox>
                        <TextBox>
                            <Text>
                                <HeadlineWrapper>
                                    <LabelName>This is label of headline</LabelName>
                                    <HeaderLine>Someone</HeaderLine>
                                    <Paragraph>123/321 Chakrabongse Rd.</Paragraph>
                                    <Paragraph>Tel: 0123456789</Paragraph>
                                </HeadlineWrapper>
                            </Text>
                        </TextBox>
                    </Content>
                </ContactWrapper>
            </ContactSection>
        </>
    )
}

export default Contact