import React from 'react'

import {
  HeroSection,
  HeroImage,
  HeroContent,
  HeroText,
  HeroHeadlineWrapper,
  HeroButton,
  TextLabel,
  TextHeaderLine,
  TextParagraph
} from './styles'

const Hero = () => {
  return (
    <HeroSection>
      <HeroImage>
        <HeroContent>
          <HeroText>
            <HeroHeadlineWrapper>
              <TextLabel>This is label of headline</TextLabel>
              <TextHeaderLine>Headline</TextHeaderLine>
              <TextParagraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, explicabo?</TextParagraph>
            </HeroHeadlineWrapper>
            <HeroButton href='#content'>
              <span>Explore</span>
            </HeroButton>
          </HeroText>
        </HeroContent>
      </HeroImage>
    </HeroSection>
  )
}

export default Hero