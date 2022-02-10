import styled from "styled-components";

export const TicTacToeStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    justify-content: flex-start;
    max-width: 200px;

    .tab {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
    }
`