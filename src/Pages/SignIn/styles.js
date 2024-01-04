import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;
    
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
        margin: 8.4rem 0 2.4rem 0;
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 12.4rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`