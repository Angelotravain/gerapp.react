import styled from 'styled-components';

export const DropWrapper = styled.ul`
    cursor: pointer;
    padding: 0;
`;

export const ListDropDrawer = styled.li`
text-decoration: none;
list-style: none;`;

export const ButtonDropDownStyled = styled.div`
    display: flex;
    text-decoration: none;
    flex-direction: row;
    gap: 11%;
    padding: 10px;
    width: 100%;    
    align-items: center;

    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
    &:hover{
            background-color: ${props => props.theme.colors.hover};
        }
`;

export const ListInternalDropDown = styled.ul`
        display: ${(props) => props.isOpen ? 'none' : 'block'};
        width: 100%;
    
    `;