import React from 'react'

import {
    ContactSection,
    ContactWrapper,
    Content,
    MapBox,
    TextBox
} from './styles'

const Contact = () => {
    return (
        <ContactSection id='contact'>
            <ContactWrapper>
                <Content>
                    <MapBox>Map</MapBox>
                    <TextBox>Hello there!</TextBox>
                </Content>
            </ContactWrapper>
        </ContactSection>
    )
}

export default Contact