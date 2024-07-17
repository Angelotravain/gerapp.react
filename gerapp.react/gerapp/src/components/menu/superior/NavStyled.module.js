import styled from 'styled-components';
import { FiMenu } from "react-icons/fi";

export const DivInternStyledComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const NavStyledWrapper = styled.nav`
    background-color: ${props => props.theme.colors.fundo};
    border-bottom: ${props => props.theme.colors.bottom};
    display: block;
    z-index: 0;

`;

export const IconMenuStyle = styled(FiMenu)`
    font-size: 3rem;
    color: ${props => props.theme.colors.texto};
    padding: 10px;
    cursor: pointer;
`;

export const DivAlignItensStyled = styled.div`
    width: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 500px) {
        width: 30%;
    }
`;