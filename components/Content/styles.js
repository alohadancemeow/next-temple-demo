import styled from "styled-components";

export const ContentSection = styled.div`
    position: relative;
    display: block;
    /* overflow: hidden; */
    width: 100%;
`
export const ContenWrapper = styled.div`
    position: relative;
    display: block;
    /* width: 940px; */
    width: 100%;
    margin: 0 auto;
`

export const TextBox = styled.div`
    display: block;
    width: 70%;
    margin-right: auto;
    margin-bottom: 100px;
    margin-left: auto;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
       width: 90%;
       margin-bottom: 70px;
    }
`

export const Header = styled.h2`
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 28px;
    line-height: 40px;
    font-weight: 500;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
        line-height: 20px;
    }
`

export const Paragraph = styled.p`
    color: rgba(29, 31, 46, 0.7);
    font-size: 16px;
`

export const TextLink = styled.div`
    margin-top: 10px;
    display: inline-block;
    border-bottom: 2px solid rgba(162, 95, 75, 0.2);
    color: #a25f4b;
    text-decoration: none;
    transition: color 400ms ease, border-color 400ms ease;

    &:hover{
        border-bottom-color: rgba(162, 95, 75, 0.7);
        color: #743f2f;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 12px;
    }
`

export const ProductBox = styled.div`
    margin-bottom: 100px;
    text-align: center;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 70px;
    }
`

export const ProductSliderWrapper = styled.div`
    width: 100%;
    max-width: 940px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
       width: 90%;
    }
`

export const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px 15px;
    width: 100%;
    max-width: 940px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
        /* margin: 0 20px; */
        gap: 15px 5px;
        padding: 0 20px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        /* margin: 0 20px; */
        /* gap: 15px 5px;
        padding: 0 20px; */
    }
`