import { SideBarStyledWrapper, ContainerCloseMenu, ContainerSideMenuStyled, CloseIcon, Dashboard, MenuSidebarStyledComponent, MenuPerfilStyled } from './Sidebar.module'
import Dropdown from '../dropdown/Dropdown';
import Link from '../dropdown/Link';
import {
    dataCadastroMenus,
    dataFinanceiroMenus,
    dataLocacaoMenus,
} from '../../data/menu/DataMenu';
import {
    IconCadastroStyled,
    IconFinanceiroStyled,
    IconLocacaoStyled
}
    from './Sidebar.module'


const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <SideBarStyledWrapper isOpen={isOpen} >
            <ContainerSideMenuStyled>
                <CloseIcon onClick={toggleSidebar} />
            </ContainerSideMenuStyled>
            <MenuPerfilStyled>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFRIVGBcZFxcYFRcXGBgYFRcWGBgYFxYaHSggGBolHRUYITEiJikrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQGi8lHSUtLS0tLSstLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0rLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUDBgcCAf/EAD8QAAIBAgMECAQDBgQHAAAAAAABAgMRBCExBRJBUQYTImFxgZGhMrHB0QcjUhRCgpLh8DNicqIVF0NTY7Lx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQEAAQQDAAIDAAAAAAAAAAECEQMSITETQVEUIgQyYf/aAAwDAQACEQMRAD8A7iAAAAAAAAAABVbc6R4bBq+IrRg3pHNyfhFZkHpn0iWFpuMGuvmnu8VBab7XyXF91zi9bZzxE3KdSc5Sd3J6tviyLZFs4uvTpv8AzYwW9ZU69ue7DPy3zadh9IsPi1ejUTa1i8pLy4rvRxnDdFadvhbfe39CxwWx1RlGcXOEotWlGWa8L6+BX5MtPg07UDXejnSJ1pdTWSVa14yXw1Iq12k/hkuMTYi7GzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DFi29ydld7sreNmBxLpHjJV6k6zf8AiSdu6CbUF5RS82z3saCMOKglgaVVdqTluqKzd1w+vmRsLtGrQtKpSp9XfNqe9L0Mupy6+jZI3vB0k1c+4mKaIGC2wpU3OMW1a+Rr9LpDVqVLTxVKlTeidKN/Vv6lMX6abn22mFOW7vw/xKT3o+Mc7eDV15nQ8NWU4RmtJRUl4SV18znuxcapYfEN2coRb3lkmmnZ56PI3LopK+Dw7/8AFD0tl7G+fTk6v+y1ABLMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAj7QxHV0qlS29uRlK3PdTdvYkGLFUVOEoPScXF+ElZ/MDiFfDyqUXThenCpXqyUXa8YqMLK6y469xgp7IUFJW3nK2spS0va2nPzyvoi42/SlhN2FSKUnWq7ru7TT3JRa5N3tb/AClDtHHSk1uyalwS4d5hrudvTmOG09GcE1RaSy5EOt0epynfeSbe84OMWm+aUla/qQNkYjF2dOdaMU18Sa3kn7E6pjY04bkqqm1dqo5qUsud7X8iszZ5a3Uq+2ZsqEE6aVo1IyjJJbqd1llG2dzbuidWToJPSLUYZW7ChFpWsuZzzZO0p/tFBNXU3K+d0lFLTndyVu46ns/DdXBRvd8Xzb1ZriVydaxJABowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGkfirs7rMNCpFXlRmpr+HO3scsoRUcQqi3ZxtuqE03HOzjOyaelvVneekNFTw1aLjvdiTt3pXXyOD4iEXThWpNtRvGa/eWd47y5692hFnhp09cOg4LaUYpLdwsPClpdW/URekkaOIj+bGnU3W3FqCWedrevrbkavg6lKSTkk/EsY46lKShGStx5JLgZzmum3M8pfR2i6mJpQS+C1+7O79svI68c26FYmCxEnG27K7cnle/Luz8zpJpHLvnnyAAlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHyUks27IqdpbWcYvqld839FxJk5Rbw1j8Y9p1aODToycX1kJTa13Yu78vscepybW9FtNrhx458zt6wv7TRaq9tS3r3zuvh90ca2hsiWCrzw87uMXenJ8acs4vx4eKZHUzxF+jrm2IMsJN6Stf0LrYOxErOcm8/L0PNKisrl3s5R9OJhrddeenFvh6N50oR/eqQ81F70v9sWdSpVODObbBxlGEqmJrTUKVBRhvS0Uqjzfjay8JM39yvZ8H/Q16Wf681zf5G/78T6WIK+7WjZIjiOZexlykA8Rqp8T2QkAAAAAAAAAAAAAAAAAAAAAAAAAAAA8zlZN8kB9lK2b0INXH67unMrcTXm/jvbVOOdvLkfaFZSi7Z21t8zSYZ3aROUnnJ3XDzfIrtoTir3kkkvP01LCtK0V4r7/AEMU8DG7lbN5+YngvlquxNqVY16qrXjQnKEadv8Ap7uitbSXF836WvSHo3QxqTbtNK0ZpXy5NcVckY7ZCle3HPzIuHr1KLtJXXLhfu5F9Zm4pnVxWux6F1KUN2cXVUfhnTzbXC8db+Rm2R0SlJSck6UW8t5XlbRJR4eLNz2btCFVXjK6fDjGUcmn7ejMlSr27fuxTbffkkvRs5r0Jz5dn8nVz4a1tzohCth6dBPdUJp+LeTlLnJriT+ivW06f7NVTvR7NOT0lCNks+7LysXkuHj9zNE6O7+va4+3nXd9vMtPQS1PslofGsyjR5qHulWaaV8uJjeh9giULJAwYafAzmbSAAAAAAAAAAAAAAAAAAAAAAAABD2nUtCy4kwrtp6xX95//CZ7RfSJRlePgYa1Fp78GrtWfK6+F/R814GenFXy/tn2eXg9e58zWMax4if5d+D3Gu68kre5MloVspqcWv0teu8pW9EvUndYuaIsTK9SzRiqUlJZo+05K2p9pvLIehRYDD/s+Jkv3KrTXjZ/W/qy6cFOOekkr+5Hx9NSeXxRV1/u+xl2fL8uPjJekpL6E68+TPiWJPFeL+pkgzHF5+pU7R6RUMNuRqObnON4xhTnUk0rXyinzRHFvo54XjPG9x7iFs/aka0FUUKkU75Tg4Syds4vNLIzQq9zsO2p7oyXMkSI59rJf3dff2M0G39/sOESpVCVmSyug+Xr3lhB5FNNMvoAKrAAAAAAAAAAAAAAAAAAAAAAUe1pfm5Pddks+K1y9WXhV7cpxkkmrv6Fs+1dekWFG+befNO39H5o9VYyys0+afFdz4P2fdqQ1Qq086b34/ok8/4Z/R+qJGHxEKl1btL4oyVpLxRqy/4q9mrtT3spqcnKLae7vPK1m+y42tf+izR2rRlXnh1KLqwipNclL6q6/mRT4nAfsuMVe/5FZOnd3bpzbTik+EJWeWiduZeQ2dHec7RUpW3pRilKSWilJZtF7YpJfSR1itZRb8Ff+nuSaDyfiII+01m/P5sz5Xk4VW3dlPESjatVpbjhJ9XLd3lHrOy+7Mnwv1eWvbt49q3ue6r18Pozzh3+Wn3y95CpjNR79ePjZXKujUqwlO1Pfg9xq0kpL8uKas8tY314ss2834GKhk7d0flb6CIqFjNptUakqcJTqwi31VrSb4Xi87eGT4M8bJxNSdKLnDq6m6nKEnfd5bz52tlqWWIwsalt5Zp3TV014NZkWtCNONSWiUZSb10V23z0J5iLKYVTk+3KLSzTUba72Vm2+WpZJehX7HlvU1K1t6zStayentn5lkiNe1s+gnUXkiETaWiM9NMvYAKrAAAAAAAAAAAAAAAAAAAAAAVWOV5vuSLUpcdG9R2di2Vden2DsfK+HjOza7S0ktV58u4xyvx9V9jLTUrZ2v8AP7F1GKrQVSEqdVKSkrPk0+Pc/k0Q8Jj4yis7ssas7PPTmcY2TVcbynUlKom7uLlFX7lfJEa3Mzytjp3d4jraxTJlN6ef3ObYXpFWvZNP/Vn73Ng2d0jk0t6CduTt7Mz+bDX+N1Pxb7V2zSoVKVOe9v1nuw3Yt5pcXwWZNwb/ACo+MvaUvsVq2zRk7t7r4by7uay9zPsvFxdGOavv1OOecqlsvQ07s2eKy7NZt5ibGopJtO+q84uSfumKcbv+FfU8U4KN0tO2/OTcn7tnqn+607ZW0uWUiTHL++JTdL5qOEr523qcoX5dYty/+4tZ7y0Sfm17WZzv8V9tdVQVGTW/VatCLu7Rs3Jrgk0vUiLWOg4aKSUVokv6L0JKZRbE2nGrRjVT7Moxl39paePAtYXebjfkm9PuxURJTJmGeRXxrZ2cXF8L2s/BrLy1JmFqcCtWiSACi4AAAAAAAAAAAAAAAAAAAAAFTjo2qeJbFRtKX5i8EWz7V16Io92MFWvGEXKclGK1bdkvFs1zaHTejG6oxlVlzzhD+Zq78l5k61J7M5ur4jZq1K6abbTVvXwOIrCOjXrUJXvCTSu7tx1i/OLT8zbcT0uxM1ZSjBf5I295OT9LGtbSwrrz6yU5dZZLe3u1ZaXvr5mG+pnU4jq6XR3i81IwFrvnwXFl1hUlF3aT5GgbV2Zi9act5LRfC787p5lLHGY6i7y6zvvmjH4+fPLpvV7fFldTrVU1nfN+B8WXE0fZ/TSWUaln/qVvcuafSGD1VmZ3GovnqZ1G0wxtWPw1ZrzbXo8jI9sYlJJVG0tOzD7GvQ2xDmS6e0l/bJ79z7Pj6d+otP8Aj2L/AO6/5Y/YpMfguvqOpUjv1Grb0r3suC4Jdy5kyOPi3qfK2Nazi0O/X6j48fid0YxH7NaKinDhFt3XfFt9+j9joOCxkKsd6D8VxT5NHIq203xiSdk7aqUp71Jve/S72kuMX3d/D57dPrWeKw6v+PL5z7dbZ9pO0kVex9r08VT6yF007Tg8pQmtYyXB/NNNZMlxb34W/UvTj7HV7jg9VcgAouAAAAAAAAAAAAAAAAAAAAABrvTTHrDUXXcXJq0Ulxbva74LVt9xsRG2lgo16U6U1eM4uL7rq1135g8fbiuJx1XENyqzcrPKN7Qjy3YaLW183zbPnV5ZMq8TW6mc6Un26U5Ql3uEnFvwyIktuHNqW16GNZk8LicJc8j5Tpviyl/4q5aOxhntJ/qKdtW742qlNLX/ANkZ3WpvW3rc0mWKk/3/AJnjr5frJmaXcbHtbZeEqptpJ80ajjMNLDvsT36fBPVLuZKdfnJtHjEbrWeXjqWnLPXFY6GJjPR2fLiZ1VlwkVcNnzk+xCWbydra5alrgdlVm5KdlGCi3J8pK6z8vY1nStY3rTPuvUMbUXf5kintSa4EPEYCUePC+pHVCpwuVvSv4vOvP1sFDarv2reZY4fa6ilu7t0arT2ZiJ5RptlrgOheOqWtTUb8XUivrcj4afyM/rZNmdI5Uayq6p2VRcZR5d7jm15rizrGxKqqJyWdrWfBqUU00+Kszj+E/DTaTmoSUIQvnUdSMkl3JZvwsdr2VgY0KNOjH4acIwTer3Uld9+RrjnM4YdWzV5iWACzMAAAAAAAAAAAAAAAAAAAAAAABpXSn8N8PjKrrKc6NSXx7qTjJ6X3Xo/AqKn4N4a3ZxNZPm1B+1kfAOE81re3vwweHfYxSkrXzptP2bKbD9Aq9SKlGpTs+bkvofAaZxmxnerqXhirdC8RF2cofzP7GePQSta7qQ8Ff6gF/iypevv9T8H+Hc5WvUSvbPXLN6eCXqbZgfw/w8YWnBSkrNS43X07gCmpJ6aY1dTzWXafR6nKnuRSg1o48Hwa87MpNs7Oe9FRypyXa59i7WX8UgDXHpjv21HHPfqPgm/ZHhRswCl9rz02ro/TujdcBHIA0vpj9txwtTegnzRlAOa+3VAAEJAAAAAAAAAAAAAAAAAAB//Z" width={'100px'} alt="avatar" />
                <span>Nome people</span>
                <span>Gerente</span>
                <span><a href=''>Perfil</a></span>
            </MenuPerfilStyled>
            <div>
                <MenuSidebarStyledComponent >
                    <Dashboard href='/' /> <a href='/'>Tela Inicial</a>
                </MenuSidebarStyledComponent>
                <Dropdown title={'Cadastros'} icon={<IconCadastroStyled />}>
                    {dataCadastroMenus.map((menu) => (
                        <Link
                            key={menu.id}
                            name={menu.name}
                            link={menu.link}
                        />
                    ))}
                </Dropdown>
                <Dropdown title={'Financeiro'} icon={<IconFinanceiroStyled />}>
                    {dataFinanceiroMenus.map((menu) => (
                        <Link
                            key={menu.id}
                            name={menu.name}
                            link={menu.link}
                        />
                    ))}
                </Dropdown>
                <Dropdown title={'Locação'} icon={<IconLocacaoStyled />}>
                    {dataLocacaoMenus.map((menu) => (
                        <Link
                            key={menu.id}
                            name={menu.name}
                            link={menu.link}
                        />
                    ))}
                </Dropdown>
                <MenuSidebarStyledComponent >
                    <a href='/'>Configurações</a>
                </MenuSidebarStyledComponent>
                <MenuSidebarStyledComponent >
                    <a href='/'>Sair</a>
                </MenuSidebarStyledComponent>
            </div>
        </SideBarStyledWrapper>
    );
};

export default Sidebar;
