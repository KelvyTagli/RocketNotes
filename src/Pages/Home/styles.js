import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 230px auto;
    grid-template-rows: 105px 128px auto 6.4rem;
    grid-template-areas: "brand header" "menu search" "menu content" "newnote content";
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const Brand = styled.div `
    grid-area: brand;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`
export const Menu = styled.ul `
    grid-area: menu;

    padding-top: 6.4rem;
    text-align: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > li {
        margin-bottom: 2.4rem;
    }
`
export const Search = styled.div `
    grid-area: search;

    padding: 4.4rem 6.4rem 0;
`
export const Content = styled.div `
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;
`
export const NewNote = styled(Link)`
    grid-area: newnote;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;

    gap: .8rem;
`