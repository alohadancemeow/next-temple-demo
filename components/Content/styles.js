import styled from "styled-components";

export const ContentSection = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
`
export const ContenWrapper = styled.div`
    position: relative;
    display: block;
    width: 940px;
    margin: 0 auto;
`

export const TextBox = styled.div`
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
    font-weight: 500;
`

export const Paragraph = styled.p`
    color: rgba(29, 31, 46, 0.7);
    font-size: 16px;
`

export const TextLink = styled.a`
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
`

export const SubHeadLine = styled.div`
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`

export const Label = styled.div`
    position: static;
    display: block;
    opacity: 0.6;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 15px;
`

export const Line = styled.div`
    display: inline-block;
    width: 30px;
    height: 1px;
    /* background-color: #ececed; */
    background-color: #e1b3a5;
`

export const ProductBox = styled.div`
    margin-bottom: 100px;
    text-align: center;
`

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 -10px;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
`
export const ProductWrapper2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px 0;
    margin: 0 -10px;
`