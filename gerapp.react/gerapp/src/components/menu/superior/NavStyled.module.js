import styled from 'styled-components';
import { FiMenu } from "react-icons/fi";

export const DivInternStyledComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const NavStyledWrapper = styled.nav`
    background-color: #2d2d2d;
    border-bottom: 1px solid #3d3d3d;
    display: block;
    z-index: 0;
`;

export const IconMenuStyle = styled(FiMenu)`
    font-size: 3rem;
    color: #fff;
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