import React from 'react'

import {
    ContactSection,
    ContactWrapper,
    Content,
    MapBox,
    TextBox
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
                        <MapBox>Map</MapBox>
                        <TextBox>Hello there!</TextBox>
                    </Content>
                </ContactWrapper>
            </ContactSection>
        </>
    )
}

export default Contact