import React from 'react'
import {
    TemplateContainer,
    ModalMenuDrawer,
    MenuSuperiorNav,
    MenuOpen,
    MenuClose,
    DivMenuCenter
} from './Template.module'
import Dropdown from '../dropdown/Dropdown';
import { MdAppRegistration } from "react-icons/md";
import LinkCadastrosRedirect from './link/LinkCadastrosRedirect';
import LinkFinanceiroRedirect from './link/LinkFinanceiroRedirect';
import LinkLocacoesRedirect from './link/LinkLocacoesRedirect';
import { GiCash } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";

const Template = ({ isOpen, toogleOpen }) => {
    return (
        <TemplateContainer isOpen={isOpen} onDoubleClick={() => toogleOpen(!isOpen)}>
            <MenuSuperiorNav>
                {isOpen ?
                    <MenuClose onClick={() => toogleOpen(!isOpen)} />
                    : <MenuOpen onClick={() => toogleOpen(!isOpen)} />}
            </MenuSuperiorNav>
            <ModalMenuDrawer isOpen={isOpen}>
                <Dropdown title={'Cadastros'} icon={<MdAppRegistration />}>
                    <LinkCadastrosRedirect />
                </Dropdown>
                <Dropdown title={'Financeiro'} icon={<GiCash />}>
                    <LinkFinanceiroRedirect />
                </Dropdown>
                <Dropdown title={'Locações'} icon={<GrDeliver />}>
                    <LinkLocacoesRedirect />
                </Dropdown>
            </ModalMenuDrawer>
            <DivMenuCenter isOpen={isOpen}>
                <Dropdown title={'Cadastros'} icon={<MdAppRegistration />}>
                    <LinkCadastrosRedirect />
                </Dropdown>
                <Dropdown title={'Financeiro'} icon={<GiCash />}>
                    <LinkFinanceiroRedirect />
                </Dropdown>
                <Dropdown title={'Locações'} icon={<GrDeliver />}>
                    <LinkLocacoesRedirect />
                </Dropdown>
            </DivMenuCenter>
        </TemplateContainer>
    )
}

export default Template