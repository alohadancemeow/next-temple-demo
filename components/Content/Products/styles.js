import styled from "styled-components";
import { Image } from "antd"


export const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* padding: 0 10px 10px; */
    text-align: center;
    /* margin-bottom: 15px; */
`

export const ProductItemImage = styled(Image)`
    position: relative;
    /* margin-bottom: 10px; */
    
    &.ant-image-img {
        /* width: 460px;
        height: 540px; */
        width: 940px;
        height: 780px;
        object-fit: cover;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            width: 100%;
            height: 700px;
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            /* height: 400px; */
            height: 100%;
        }   
    }

    /* background-image: url('/image1.jpg');
    background-position: 50% 50%;
    background-size: cover;
    display: block; */
   
`
export const ProductItemImage2 = styled(Image)`
    position: relative;
    /* margin-bottom: 10px; */
    
    &.ant-image-img {
        width: 300px;
        height: 380px;
        object-fit: cover;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            width: 350px;
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            width: 100%;
            height: 100%;
        }
    }
`

export const ProductItemDescription = styled.div`
    display: inline-block;
    margin-bottom: 5px;
    color: #1d1f2e;

    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    text-align: center;
`