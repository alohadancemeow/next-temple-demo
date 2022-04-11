import styled from "styled-components";

export const HeroSection = styled.div`
    margin-bottom: 100px;
    padding: 0 30px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 50px;
        padding: 0px;
    }
    
`
export const HeroImage = styled.div`
    max-width: 1440px;
    min-height: 530px;
    /* min-width: 880px; */
    margin: 0 auto;
    background-color: #050827;
    display: flex;
    align-items: center;

    background-image: linear-gradient(180deg, rgba(5, 8, 39, 0.4), rgba(5, 8, 39, 0.4)), url("/image3.jpg");
    background-position: 0px 0px, 50% 50%;
    background-size: auto, cover;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        /* width: 890px; */
        /* width: 700px; */
        width: 100%;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
       min-height: 390px;
    }

    
`
export const HeroContent = styled.div`
    /* width: 940px; */
    width: 100%;
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
       margin: 20px;
    }
`

export const TextLabel = styled.div`
    opacity: 0.8;
    display: block;
    font-size: 12px;
    line-height: 18px;
    /* font-weight: 500; */
    letter-spacing: 2px;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        line-height: 10px;
    }
`

export const TextHeaderLine = styled.h2`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 48px;
    line-height: 60px;
    color: white;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
       font-size: 40px;
    }
`

export const TextParagraph = styled.p`
    margin-bottom: 30px;
    align-self: start;
    opacity: 0.9;
    color: #fff;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
       font-size: 12px;
    }
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
        /* color: orange; */
        color: #743f2f;
    }

    /* transition: background-color 400ms ease, opacity 400ms ease, box-shadow 400ms ease; */

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 12px 24px;
    }
`