import styled from "styled-components";

import background from '../../assest/background.jpg'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 10rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > h2 {
        font-size: 2.4rem;
        margin: 4.4rem 0;
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 7rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`

export const Background = styled.div `
    flex: 1;
    background: url(${background}) no-repeat center center;
    background-size: cover;
`