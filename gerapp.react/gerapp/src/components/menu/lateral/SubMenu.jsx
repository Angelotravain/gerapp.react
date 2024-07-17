import React from 'react'
import Dropdown from '../dropdown/Dropdown';
import Link from '../dropdown/Link';
import { dataCadastroMenus, dataFinanceiroMenus, dataLocacaoMenus } from '../../../data/menu/DataMenu';
import { MdInsertEmoticon } from "react-icons/md";
import { HiCash } from "react-icons/hi";
import { FaTruckPickup } from "react-icons/fa";

export default function SubMenu() {
    return (
        <>
            <Dropdown title={'Cadastros'} icon={<MdInsertEmoticon />}>
                {dataCadastroMenus.map((menu) => (
                    <Link
                        key={menu.id}
                        name={menu.name}
                        link={menu.link}
                    />
                ))}
            </Dropdown>
            <Dropdown title={'Financeiro'} icon={<HiCash />}>
                {dataFinanceiroMenus.map((menu) => (
                    <Link
                        key={menu.id}
                        name={menu.name}
                        link={menu.link}
                    />
                ))}
            </Dropdown>
            <Dropdown title={'Locação'} icon={<FaTruckPickup />}>
                {dataLocacaoMenus.map((menu) => (
                    <Link
                        key={menu.id}
                        name={menu.name}
                        link={menu.link}
                    />
                ))}
            </Dropdown>
        </>
    )
}
