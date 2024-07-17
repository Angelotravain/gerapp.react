import styled from 'styled-components'
import { IoMdClose } from "react-icons/io";
import { MdDashboard } from "react-icons/md";


export const SideBarStyledWrapper = styled.div`
    position: fixed;
    width: 250px;
    height: 100%;
    background-color: #2d2d2d;
    color: #fff;
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const ContainerCloseMenu = styled.div`
    border-bottom: 1px solid #3d3d3d;
    border-right: 1px solid #3d3d3d;
    display: flex;
    align-items: center;
    justify-content: start;
`;

export const ContainerSideMenuStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    font-size: 3rem;
    padding: 5px;
    display: inline-block;
    color: #fff;
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
        color: #fff;
        text-decoration: none;
        width: 100%;
        padding: 10px;
        padding-left: 0;
        display: flex;
        align-items: center;
        justify-content: start;
    }

    &:hover{
        background-color: #3d3d3d;
    }
`;