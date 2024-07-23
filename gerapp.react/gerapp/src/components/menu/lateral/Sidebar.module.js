import styled from 'styled-components'
import { IoMdClose } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { MdInsertEmoticon } from "react-icons/md";
import { HiCash } from "react-icons/hi";
import { FaTruckPickup } from "react-icons/fa";

export const SideBarStyledWrapper = styled.nav`
    position: fixed;
    width: 250px;
    height: 100%;
    background-color: ${props => props.theme.colors.fundo};
    color: ${props => props.theme.colors.texto};
    transition: transform .5s;
    z-index: 1000;
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 12px;  
    }  
`;

export const ContainerCloseMenu = styled.div`
    border-bottom: ${props => props.theme.colors.bottom};
    border-right: ${props => props.theme.colors.bottom};
    display: flex;
    align-items: center;
    justify-content: start;
`;

export const ContainerSideMenuStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    h2{
        font-size: 2rem;
    }
`;

export const CloseIcon = styled(IoMdClose)`
        font-size: 3rem;
        padding: 10px;
        display: inline-block;
`;

export const Dashboard = styled(MdDashboard)`
    font-size: 2rem;
    padding: 5px;
    display: inline-block;
    color: ${props => props.theme.colors.texto};
`;
export const MenuSidebarStyledComponent = styled.div`
    padding: .7rem;
    width: 100%;
    opacity: 1;
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: center;
    margin: 0 auto;
    flex-direction: row;

    a{
        color: ${props => props.theme.colors.texto};
        text-decoration: none;
        width: 100%;
        padding: 10px;
        padding-left: 0;
        display: ${props => props.display || 'flex'};
        align-items: center;
        justify-content: start;
    }

    &:hover{
        background-color: ${props => props.theme.colors.hover};
    }
`;

export const IconCadastroStyled = styled(MdInsertEmoticon)`
        font-size: 1.5rem;
    `;
export const IconFinanceiroStyled = styled(HiCash)`
        font-size: 1.5rem;
    `;
export const IconLocacaoStyled = styled(FaTruckPickup)`
        font-size: 1.5rem;
    `;

export const MenuPerfilStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 50px;
    img{
        border-radius: 100%;
        width: 150px;
        height: 150px;
    }
    span{
        font-size: 18px;
        font-weight: bold;
        margin: 4px;
        
        a{
            background-color: ${props => props.theme.colors.texto};
            color: ${props => props.theme.colors.hover};
            text-decoration: none;
            padding: 5px;
            border-radius: 5%;

            &:hover{
                opacity: .7;
            }
        }
    }
`;