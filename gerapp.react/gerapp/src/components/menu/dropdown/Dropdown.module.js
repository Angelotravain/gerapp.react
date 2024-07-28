import styled from 'styled-components'

export const DropContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: row;

    &:hover{
        background-color: ${props => props.theme.colors.hover};
    }
`;

export const DropTitle = styled.h3`
    color: ${props => props.theme.colors.textColor};
    font-size: 1.2rem;
    padding: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const DropModal = styled.div`
    width: 100%;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
`;
export const LinkButtonModal = styled.a`
    font-size: 1.1rem;
    font-weight: bold;
    gap: 10px;
    color: ${props => props.theme.colors.textColor};
    text-decoration: none;
    margin-left: 20%;

`;

export const DropModalLink = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px;
    cursor: pointer;
    width: 100%;
    border: none;
    &:hover{
        background-color: ${props => props.theme.colors.hover};
    }
`;