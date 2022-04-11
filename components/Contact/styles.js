import styled from "styled-components";

export const ContactSection = styled.div`
    margin-bottom: 100px;
    padding: 0 30px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 50px;
        padding: 0px;
    }
`

export const ContactWrapper = styled.div`
    max-width: 1440px;
    min-height: 450px;
    width: 100%;
    /* min-width: 880px; */

    color: white;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;

    margin: 0 auto;
    background-color: #050827;
    display: flex;
    align-items: center;
    padding: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-height: fit-content;
    }
`

export const Content = styled.div`
    /* width: 940px; */
    width: 100%;
    height: 400px;
    margin: 0 auto;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    /* text-align: center; */
    color: white;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        /* width: 90%; */
        height: 300px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        /* width: 90%; */
        height: 150px;
    }
`

export const MapBox = styled.div`
    width: 50%;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`
export const TextBox = styled.div`
    width: 50%;
    text-align: center;
    color: #fff;
    background-color: #3A3845;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
    }
`

