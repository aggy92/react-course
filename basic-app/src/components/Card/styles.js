import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px 25px;
    border: 1px solid black;
    border-radius: 12px;
    padding: 8px 16px;
    & a {
        text-decoration: none;
        color: black;
    }
`;