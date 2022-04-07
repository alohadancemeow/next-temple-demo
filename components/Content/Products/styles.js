import styled from "styled-components";
import { Image } from "antd"


export const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 50%; */
    padding-right: 10px;
    padding-left: 10px;
    align-items: center;
    text-align: center;
    
`

export const ProductItemImage = styled(Image)`
    position: relative;
    margin-bottom: 10px;
    width: 460px;
    height: 540px;
    object-fit: cover;

    /* background-image: url('/image1.jpg');
    background-position: 50% 50%;
    background-size: cover;
    display: block; */
   
`
export const ProductItemImage2 = styled(Image)`
    position: relative;
    margin-bottom: 10px;
    width: 300px;
    height: 380px;
    object-fit: cover;
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