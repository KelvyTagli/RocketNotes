import styled from "styled-components";

export const Container = styled.header `
    grid-area: header;

    height: 10.5rem;
    width: 100%;

    border-bottom-width: .3rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8rem;
`

export const Profile = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;

    >img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
    }

    >div {
        line-height: 2.4rem;

        span {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        h3 {
            font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;
`