import styled from 'styled-components'
import { NumericFormat } from 'react-number-format';

export const FormContainer = styled.form`
    display: flex;
    flex-wrap:wrap;
`;

export const FormActionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: ${props => props.theme.colors.border};
`;


export const UnodernedList = styled.ul`
    width: 90%;
    margin: 0 auto;
    border: ${props => props.theme.colors.border};
    height: 100px;
    overflow-x: auto;
`;

export const Li = styled.li`
    padding: 5px;
    &:hover{
        background-color: ${props => props.theme.colors.hover};
        cursor: pointer;
    }
`;
