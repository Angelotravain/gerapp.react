import { SideBarStyledWrapper, ContainerCloseMenu, ContainerSideMenuStyled, CloseIcon, Dashboard, MenuSidebarStyledComponent } from './Sidebar.module'
import SubMenu from './SubMenu';


const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <SideBarStyledWrapper isOpen={isOpen} >
            <ContainerCloseMenu>
                <ContainerSideMenuStyled>
                    <CloseIcon onClick={toggleSidebar} />
                </ContainerSideMenuStyled>
            </ContainerCloseMenu>
            <MenuSidebarStyledComponent>
                <a href='/'>
                    <Dashboard href='/' />
                    Tela Inicial
                </a>
            </MenuSidebarStyledComponent>
            <SubMenu />
        </SideBarStyledWrapper>
    );
};

export default Sidebar;
