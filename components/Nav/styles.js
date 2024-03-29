import styled from "styled-components";


export const NavBar = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 99;
    margin: 20px 0;
`

export const NavWrapper = styled.div`
    width: 940px;
    padding: 1rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    a {
        text-decoration: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        /* width: 890px; */
        width: 700px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        /* width: 890px; */
        width: 100%;
        padding: 1rem ;
    }
`

export const NavLogo = styled.h2`

`

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`

export const NavigationMenu = styled.div`
    margin-right: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`

export const NavLink = styled.span`
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

     @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 20px;
    }
`

export const CopyButton = styled.button`
    width: fit-content;
    border: none;
    border-radius: 50%;

    &:hover{
        color: #743f2f;
     }

     @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 5px;
        background-color: transparent;
    }
`

// mobile and ipad
export const MobileButton = styled.div`
    cursor: pointer;
    display: none;

    &:hover{
        color: #743f2f;
     }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;
    }
`
export const MobileMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

export const MobileIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`