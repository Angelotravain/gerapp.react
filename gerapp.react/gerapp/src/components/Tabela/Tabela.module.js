import styled from 'styled-components';
import { MdFilterList } from "react-icons/md";
import { GoGear } from "react-icons/go";

export const TableContainer = styled.div`
    overflow: hidden;
    border: ${props => props.theme.colors.border};
    width: 80%;
    height: 85vh;
    margin: 20px 0;
        @media screen and (max-width: 650px) {
        width: 95%;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
`;

export const Th = styled.th`
    padding: .5rem;
    text-align: left;
    border-bottom: ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.primary};
`;

export const Td = styled.td`
    padding: .5rem;
    text-align: left;
    border-bottom: ${props => props.theme.colors.border};
`;

export const ImgAvatarTable = styled.img`
        width: 40px;
        height: 40px;
        border-radius: 50%;
`;

export const Tr = styled.tr`
    &:hover{
        background-color: ${props => props.theme.colors.hover};
        cursor: pointer;
    }
`;

export const Filter = styled(MdFilterList)`
    font-size: 2rem;
    width: 40px;
    height: 40px;
    padding: 3%;
    cursor: pointer;

    @media screen and (max-width: 650px) {
        width: 30px;
        height: 30px;
    }

    &:hover{
        background-color: ${props => props.theme.colors.hover};
        border-radius: 50%;
        border: 1px solid ${props => props.theme.colors.blue};
    }
`;

export const Gear = styled(GoGear)`
    font-size: 2rem;
    width: 40px;
    height: 40px;
    padding: 3%;
    cursor: pointer;

    @media screen and (max-width: 650px) {
        width: 30px;
        height: 30px;
    }

    &:hover{
        background-color: ${props => props.theme.colors.hover};
        border-radius: 50%;
        border: 1px solid ${props => props.theme.colors.blue};
    }
`;

export const TableFilter = styled.div`
    display: ${props => props.isFilter ? 'flex' : 'none'};
    flex-direction: column;
    left: 80%;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border: ${props => props.theme.colors.border};
`;

export const TableGear = styled.div`
    left: 80%;
    display: ${props => props.isGear ? 'flex' : 'none'};
    transition: all.5s;
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.colors.primary};
    border: ${props => props.theme.colors.border};
    flex-direction: column;
    align-items: center;
`;

export const ButtonGearMenu = styled.button`
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    padding: 10px;
    cursor: pointer;
    border: none;

    &:hover{
        background-color: ${props => props.theme.colors.hover};
    }

`;

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    left: 80%;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    height: 40px;
    border: ${props => props.theme.colors.border};
`;

export const ListContainer = styled.div`
    width: 100%;
`;

export const ItemContainer = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-bottom: ${props => props.theme.colors.border};
`;

export const InformationContainer = styled.div`
    text-align: justify;

    &:hover{
        background-color: ${props => props.theme.colors.hover};
    }
`;

export const ActionContainer = styled.div`
    padding: 30px;
`;

export const ValuesContainer = styled.div`
    display: flex;
`;
export const DivTableContent = styled.div`
`;

export const DivListContent = styled.div`
        @media screen and (min-width: 650px) {
        display: none;
    }
`;