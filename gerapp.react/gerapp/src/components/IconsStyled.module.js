import styled from 'styled-components';
import { FiSave } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoExit } from "react-icons/io5";

export const IconSavedStyled = styled(FiSave)`
        width: 80%;
        height: 80%;
        color: ${props => props.theme.colors.texto};
    `;

export const IconsCheckStyled = styled(FaCheck)`
    color: ${props => props.theme.colors.success};
    font-size: 20px;
    margin-left: 20%;
`;

export const IconNoCheckedStyled = styled(IoClose)`
    color: ${props => props.theme.colors.error};
    font-size: 30px;
    margin-left: 20%;
`;

export const IconCancelStyled = styled(IoExit)`
        width: 80%;
        height: 80%;
        color: ${props => props.theme.colors.texto};
    `;