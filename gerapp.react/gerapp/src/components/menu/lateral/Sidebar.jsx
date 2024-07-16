import './Sidebar.css';
import { IoMdClose } from "react-icons/io";
import Dropdown from '../dropdown/Dropdown';
import Link from '../dropdown/Link';
import { dataCadastroMenus, dataFinanceiroMenus, dataLocacaoMenus } from '../../../data/menu/DataMenu';
import { MdDashboard } from "react-icons/md";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className='container-close-menu'>
                <IoMdClose id='CloseMenu' onClick={toggleSidebar} />
                <h2>GERAPP</h2>
            </div>
            <div className='menu-sidebar'><MdDashboard id='dashboard' /><a href='/'>Tela Inicial</a></div>
            <Dropdown title={'Cadastros'}>
                {dataCadastroMenus.map((menu) => (
                    <Link
                        key={menu.id}
                        name={menu.name}
                        link={menu.link}
                    />
                ))}
            </Dropdown>
            <Dropdown title={'Financeiro'}>
                {dataFinanceiroMenus.map((menu) => (
                    <Link
                        key={menu.id}
                        name={menu.name}
                        link={menu.link}
                    />
                ))}
            </Dropdown>
            <Dropdown title={'Locação'}>
                {dataLocacaoMenus.map((menu) => (
                    <Link
                        key={menu.id}
                        name={menu.name}
                        link={menu.link}
                    />
                ))}
            </Dropdown>
        </div>
    );
};

export default Sidebar;
