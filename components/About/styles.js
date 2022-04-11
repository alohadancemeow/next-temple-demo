import styled from "styled-components";
import { Image } from "antd"

export const Container = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    padding: 0 30px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0px;
    }
`

export const Content = styled.div`
    position: relative;
    left: 0px;
    right: 0px;
    z-index: 0;
    display: block;
    max-width: 1440px;
    min-width: 940px;
    margin: 0 auto;
    padding: 100px 0;
    background-color: #f6f6f6;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-width: 100%;
        padding: 70px 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-top: 30px;
    }
`

export const ContentWrapper = styled.div`
    position: relative;
    display: block;
    /* width: 940px; */
    width: 100%;
    margin: 0 auto; 
`

export const HeadLineWrapper = styled.div`
    width: 60%;
    display: block;
    margin: 0 auto 100px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 80%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 90%;
    }
`

export const HeadLine = styled.h1`
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 36px;
    line-height: 50px;
    font-weight: 500;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
        line-height: 20px;
    }
`

export const Paragraph = styled.p`
    color: rgba(29, 31, 46, 0.7);
    font-size: 18px;
    line-height: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 16px;
        line-height: 23px;
    }
`

export const MainWrapper = styled.div`
    top: -150px;
    margin-bottom: -110px;
    width: 100%;
    position: relative;
    display: block;
    overflow: hidden;
    /* text-align: center; */
`

export const MainContent = styled.div`
    position: relative;
    z-index: 1;
    display: block;
    width: 940px;
    /* max-width: 1440px;
    min-width: 940px; */
    /* width: 80%; */
    margin: 0 auto;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 90%;
    }
`

export const MainImage = styled(Image)`
    display: block;
    margin: 0 auto 100px;
    width: 100%;
    
    &.ant-image-img {
        width: 940px;
        height: 320px;
        object-fit: cover;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            width: 660px;
            margin-bottom: 50px;
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            width: 100%;
            height: 100%;
        }
    }
`

export const MainText = styled.div`
    display: block;
    width: 70%;
    margin: 0 auto 100px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        margin-bottom: 50px;
    }
`

export const Header = styled.h2`
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 28px;
    line-height: 40px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 24px;
        line-height: 30px;
    }

    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 20px;
        line-height: 25px;
    }
`

