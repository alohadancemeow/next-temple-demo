import styled from "styled-components";

export const HeroSection = styled.div`
    margin-bottom: 100px;
    padding: 0 30px;
    
`
export const HeroImage = styled.div`
    max-width: 1440px;
    min-height: 530px;
    min-width: 880px;
    margin: 0 auto;
    background-color: #050827;
    display: flex;
    align-items: center;
`
export const HeroContent = styled.div`
    width: 940px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
`
export const HeroText = styled.div`
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
`

export const HeroHeadlineWrapper = styled.div`
    margin-bottom: 25px;
`

export const TextLabel = styled.div`
    opacity: 0.8;
    display: block;
    font-size: 12px;
    line-height: 18px;
    /* font-weight: 500; */
    letter-spacing: 2px;
    text-transform: uppercase;
`

export const TextHeaderLine = styled.h2`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 48px;
    line-height: 60px;
    color: white;
`

export const TextParagraph = styled.p`
    margin-bottom: 30px;
    align-self: start;
    opacity: 0.9;
    color: #fff;
`

export const HeroButton = styled.a`
    position: relative;
    z-index: 50;
    display: inline-block;
    padding: 18px 24px;
    justify-content: center;
    /* border-bottom-style: none; */
    /* border-radius: 0px; */
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgb(29 31 46 / 10%);
    color: #1d1f2e;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        color: orange;
    }

    /* transition: background-color 400ms ease, opacity 400ms ease, box-shadow 400ms ease; */
`