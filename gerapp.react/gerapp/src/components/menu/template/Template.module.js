import styled from 'styled-components';
import {
    IoCloseOutline,
    IoMenuSharp
} from "react-icons/io5";

export const TemplateContainer = styled.div`
    width: ${props => props.isOpen ? '240px' : 0};
    height: 100vh;
    transition: .2s ease-in-out;
    display: flex;
    z-index: 2;
    flex-direction: column;
    
    @media (max-width: 450px) {
        width: 0;
    }
`;

export const ModalMenuDrawer = styled.nav`
    width: ${props => props.isOpen ? '240px' : 0};
    transition: .5s ease-in-out;
    height: 100vh;
    background-color: ${props => props.theme.colors.primary};
    border-right: ${props => props.theme.colors.border};
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none; 
    }
    
    @media (max-width: 450px) {
        display: none;
        width: 0;
    }
`;

export const MenuSuperiorNav = styled.nav`
    width: 100vw;
    height: calc(35px);

    background-color: ${props => props.theme.colors.primary};
    border-bottom: ${props => props.theme.colors.border};
`;

export const MenuOpen = styled(IoMenuSharp)`
    color: ${props => props.theme.colors.textColor};
    width: 25px;
    height: 25px;
    margin: 5px;
`;

export const MenuClose = styled(IoCloseOutline)`
    color: ${props => props.theme.colors.textColor};
    width: 25px;
    height: 25px;
    margin: 5px;
`;

export const DivMenuCenter = styled.nav`
    width: 100vw;
    height: ${props => props.isOpen ? '100vh' : 0};
    background-color: ${props => props.theme.colors.primary};
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none; 
    }

    @media (min-width: 450px) {
        display: none;
    }
`;