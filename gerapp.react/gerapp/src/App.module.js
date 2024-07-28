import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.second};
`;