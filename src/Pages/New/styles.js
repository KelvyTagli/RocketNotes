import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display:  grid;
    grid-template-rows: 105px auto;

    grid-template-areas: 'header' 'content';

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

`

export const Form = styled.form `
    max-width: 550px;
    margin: 3.4rem auto;

    > header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3.6rem;

        a {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    > textarea {
        width: 100%;
        height: 150px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
        resize: none;

        margin-bottom: 8px;
        border-radius: 10px;

        padding: 1.6rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
    
`