
import styled from 'styled-components';

export const ListLinkStyled = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 5px;

    div{
        margin-left: 25%;
        gap:20px;
        display: flex;
    a{
        color: ${props => props.theme.colors.texto};
        text-decoration: none;
    }
    }

    &:hover{
        background-color: ${props => props.theme.colors.hover};
    }
`;