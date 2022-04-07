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

export const NavigationMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
        padding: 0 10px;
        color: black;
        /* text-transform: uppercase; */
    }
`