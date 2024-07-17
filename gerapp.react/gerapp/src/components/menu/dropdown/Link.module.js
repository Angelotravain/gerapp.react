
import styled from 'styled-components';

export const ListLinkStyled = styled.li`
    list-style: none;
    font-size: 1rem;
    display: flex;
    width: 100%;
    padding: 5px;

    a{
        color: #fff;
        text-decoration: none;
        text-align: end;
    }

    &:hover{
        background-color: #3d3d3d;
    }
`;