import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;
        padding: 0 12.4rem;
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: 3rem auto 0;

    > div:nth-child(4) {
        margin-top: 2.4rem;
    }
`

export const Avatar = styled.div`
   position: relative;
   margin: -128px auto 3.2rem;
   width: 186px;
   height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;

        bottom: 7px;
        right: 7px;

        cursor: pointer;

        > input {
            display: none;
        }
    }
`