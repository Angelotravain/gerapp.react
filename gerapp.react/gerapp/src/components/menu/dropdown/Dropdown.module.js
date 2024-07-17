import styled from 'styled-components';

export const DropWrapper = styled.ul`
    cursor: pointer;
    padding: 0;
`;

export const ListDropDrawer = styled.li`
text-decoration: none;
list-style: none;`;

export const ButtonDropDownStyled = styled.a`
    display: flex;
    text-decoration: none;
    flex-direction: column;
    padding: 10px;
    width: 100%;

    div{
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

            &:hover{
            background-color: #3d3d3d;
        }
`;

export const ListInternalDropDown = styled.ul`
        display: ${(prop) => prop.isOpen ? 'none' : 'block'};
    `;