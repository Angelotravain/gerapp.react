
import styled from 'styled-components';

export const ListLinkStyled = styled.li`
    list-style: none;
    font-size: 1rem;
    display: flex;
    width: 100%;
    padding: 5px;

    a{
        color: ${props => props.theme.colors.texto};
        text-decoration: none;
        text-align: end;
    }

    &:hover{
        background-color: ${props => props.theme.colors.hover};
    }
`;