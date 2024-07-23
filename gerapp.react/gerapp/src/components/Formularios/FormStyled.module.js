import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 49px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.texto};

    `;
export const DivModal = styled.div`
    background-color: ${props => props.theme.colors.texto};
    border: ${props => props.theme.colors.bottom};
    -moz-box-shadow: 12px 2px 40px -1px rgba(0,0,0,0.75);
    box-shadow: 12px 2px 40px -1px rgba(0,0,0,0.75);
    max-width: 1000px;
    border-radius: 5px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    div{
        max-height: 20%;
        align-items: center;
        flex-wrap: wrap;

        ul{
            list-style: none;
            border: ${props => props.theme.colors.bottom};
            max-height: 180px;
            overflow-y: auto;
            li{
                width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;

            }
        }
        label{
            display: inline-block;
            width: 80px;
            font-weight: bold;
            margin-left: 15px;
        }
        input{
            font-size: 15px;
            margin: 5px;
            border-radius: 5px;
            padding: 5px;
            border: ${props => props.theme.colors.bottom};
        }

            input[type="checkbox"] {
               width: 20px;
               height: 20px;
               cursor: pointer;
               accent-color: ${props => props.theme.colors.success}; /* Cor do ícone do checkbox no estado checado */
               border: ${props => props.theme.colors.bottomTwo};
               border-radius: 5px;
                }
        }
`;


export const DivButtons = styled.nav`
    width: 100%;
    height: 60px;
    border-bottom: ${props => props.theme.colors.bottom};
    background-color: ${props => props.theme.colors.texto};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    button{
        background-color: ${props => props.theme.colors.buttonColor};
        height: 80%;
        margin: 10px;
        padding: 10px;
        font-size: 20px;
        color: ${props => props.theme.colors.texto};
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            opacity: .7;
        }
    }
`;
export const ContainerButtons = styled.div`
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        border-bottom: ${props => props.theme.colors.bottom};
        border-top: ${props => props.theme.colors.bottom};
    `;