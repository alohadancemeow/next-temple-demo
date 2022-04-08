import styled from "styled-components";
import { Image } from "antd"

export const Container = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    padding-right: 30px;
    padding-left: 30px;
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
`

export const ContentWrapper = styled.div`
    position: relative;
    display: block;
    /* width: 940px; */
    margin-right: auto;
    margin-left: auto;
`

export const HeadLineWrapper = styled.div`
    width: 60%;
    margin-top: 0px;
    margin-bottom: 100px;
    display: block;
    margin: 0 auto 100px;
    text-align: center;
`

export const HeadLine = styled.h1`
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 36px;
    line-height: 50px;
    font-weight: 500;
`

export const Paragraph = styled.p`
    color: rgba(29, 31, 46, 0.7);
    font-size: 18px;
    line-height: 30px;
`

export const MainWrapper = styled.div`
    top: -110px;
    margin-bottom: -110px;

    position: relative;
    display: block;
    overflow: hidden;
`

export const MainContent = styled.div`
    position: relative;
    z-index: 1;
    display: block;
    width: 940px;
    margin-right: auto;
    margin-left: auto;
`

export const MainImage = styled(Image)`
    display: block;
    
    margin-right: auto;
    margin-bottom: 100px;
    margin-left: auto;

    &.ant-image-img {
        width: 940px;
        height: 320px;
        object-fit: cover;
    }
`

export const MainText = styled.div`
    display: block;
    width: 70%;
    margin-right: auto;
    margin-bottom: 100px;
    margin-left: auto;
    text-align: center;
`

export const Header = styled.h2`
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 28px;
    line-height: 40px;
    font-weight: 400;
`

