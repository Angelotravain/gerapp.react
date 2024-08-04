import styled from 'styled-components'
import { FaRegCheckCircle } from "react-icons/fa";

export const TabsContainer = styled.div`
    width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${props => props.theme.colors.border}
`;

export const Tab = styled.div`
  flex: 1;
  padding: 10px 8%;
  cursor: pointer;
  border: none; 
  background-color: ${props => props.theme.colors.second};
  border-bottom: 3px solid ${props => props.active ? props.theme.colors.blue : props.theme.colors.hover};
  outline: none;
  text-align: center;
  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }
`;

export const ImgAvatar = styled.div`
    width: 100%;
    height: 150px;
    margin-top: 1%;
img{
            width: 150px;
            height: 150px;
            border: ${props => props.theme.colors.bottom};
            border-radius:50%;
            text-align: center;
            margin: auto;
            object-fit: cover;
            cursor: pointer;
            }
`;
export const TabPanel = styled.div`
    display: ${props => props.active ? 'flex' : 'none'};
    flex-wrap: wrap;
            table{
            width: 100%;
            align-items: center;
        }
        th{
            background-color: ${props => props.theme.colors.hover};
            color: ${props => props.theme.colors.texto};
        }
        tr{
            background-color: inherit;
            color: inherit;

            &:hover{
                background-color: ${props => props.theme.colors.hover};
                color: ${props => props.theme.colors.texto};
            }
        }
        td{
            cursor: pointer;
        }

        div{
            div{
                display: flex;
                flex-wrap: wrap;
                margin-top: 1%;
            }
        }
`;

export const DivButtonStyled = styled.div`
    width: ${props => props.tamanho || '100%'};
    height: 45px;
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    height: 30px;
    border: ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.second};
    padding: 5px;
    margin: 5px;
    cursor: pointer;
        &:hover{
                border: 1px solid  ${props => props.theme.colors.blue};
        }

`;
export const Container = styled.div`
    max-width: 90vw;
    max-height: calc(100vh - 50px);
    margin: 0 auto;
    overflow-x: auto;
    background-color: ${props => props.theme.colors.texto};
    -webkit-box-shadow: -1px 9px 21px 2px rgba(112,108,112,1);
    -moz-box-shadow: -1px 9px 21px 2px rgba(112,108,112,1);
    box-shadow: -1px 9px 21px 2px rgba(112,108,112,1);

    @media (max-width: 900px) {
        width: 90vw;
        margin-left: 70px;
    }

    @media (max-width: 660px) {
        width: 85vw;
        margin-right: 70px;
    }
        @media (max-width: 400px) {
        width: 85vw;
        margin-left: 53px;

    }
    `;

export const DivModal = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5%;
`;


export const DivButtons = styled.nav`
    width: 100%;
    background-color: ${props => props.theme.colors.texto};
    border: ${props => props.theme.colors.bottom};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;

export const ButtonTable = styled.button`
    width: 80px;
    background-color: inherit;
    border: 1px solid ${props => props.theme.colors.fundo};
    color: ${props => props.theme.colors.fundo};
    height: 35px;
    cursor: pointer;
    margin: 3px;

        &:hover{
            background-color: ${props => props.color || props.theme.colors.fundo};
            color: ${props => props.textColor || props.theme.colors.texto};
        }
`;

export const DivList = styled.div`
    width: ${props => props.tamanho || '100%'};
    overflow-y: auto;
    overflow-x: hidden;

    ul{
        display: flex;
        flex-direction: column;
        width: 100%;
        list-style: none;
        align-items: center;

        li{
            padding: 5px;
            width: 100%;
            cursor: pointer;
                &:hover{
                    background-color: ${props => props.theme.colors.hover};
        }
        }
    }
`;

export const SuccessIcon = styled(FaRegCheckCircle)`
    background-color: ${props => props.theme.colors.greenColor};
    border-radius: 50%;
    width: 30px;
    height: 30px;
`;

export const ReturnMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    gap: 10px;
    border-bottom: ${props => props.theme.colors.border};
`;