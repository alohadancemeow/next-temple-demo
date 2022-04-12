import styled from "styled-components";

export const SubHeadLine = styled.div`
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 30px;
    }
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