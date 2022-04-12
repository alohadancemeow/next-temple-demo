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
    /* min-height: 300px; */
    width: 100%;
    /* min-width: 880px; */

    color: white;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;

    margin: 0 auto;
    /* background-color: #050827; */
    /* background-image: url('/image2.jpg'); */
    background-image: linear-gradient(180deg, rgba(5, 8, 39, 0.4), rgba(5, 8, 39, 0.4)), url("/image2.jpg");
    background-position: 0px 0px, 50% 50%;
    background-size: auto, cover;

    
    display: flex;
    align-items: center;
    /* padding: 15px; */

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
    align-items: center;
    /* align-items: center; */
    /* justify-content: center; */
    /* text-align: center; */
    color: white;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: fit-content;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`

export const MapBox = styled.div`
    width: 50%;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        height: fit-content;
        padding: 0;
    }
`
export const TextBox = styled.div`
    width: 50%;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    background-color: #4c3f37;
    background-clip: content-box;
    box-shadow: -9px 12px 9px 0px #624f4b;
    margin: 20px;
    border-radius: 3px;
    /* opacity: 0.9; */

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 90%;
        margin-top: -10px;
    }
`

export const Text = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
`

export const HeadlineWrapper = styled.div`
    margin: 4rem 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 2rem 30px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 20px 0;
    }
`

export const LabelName = styled.div`
    opacity: 0.8;
    display: block;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
`

export const HeaderLine = styled.h2`
    margin: 10px 0;
    font-size: 48px;
    line-height: 60px;
    color: white;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
       font-size: 40px;
       margin: 5px 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
       font-size: 30px;
       margin: -5px 0;
    }
`

export const Paragraph = styled.p`
    align-self: start;
    opacity: 0.9;
    color: #fff;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
       font-size: 12px;
    }
`

