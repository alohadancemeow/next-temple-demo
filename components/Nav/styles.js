import styled from "styled-components";

export const NavWrapper = styled.div`
    width: 940px;
    padding: 2rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    a {
        text-decoration: none;
    }
`

export const NavLogo = styled.h2`

`

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

`

export const NavigationMenu = styled.div`
    margin-right: 15px;
`

export const NavLink = styled.a`
    text-decoration: none;
    padding: 0 10px;
    color: ${({ active }) => active ? '#a25f4b' : 'gray'};

    &:hover {
        /* border-bottom: 2px solid rgba(162, 95, 75, 0.2);
        border-bottom-color: rgba(162, 95, 75, 0.7); */
        /* color: #743f2f; */
        /* color: orange; */
        color: rgba(162, 95, 75, 0.7);
     }
`

export const CopyButton = styled.button`
    border: none;
    border-radius: 50%;
    /* background-color: #a25f4b; */
    /* color: white; */

    &:hover{
        color: #743f2f;
     }
`