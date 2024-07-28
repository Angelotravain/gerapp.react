import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: helvetica;
        color: ${props => props.theme.colors.textColor};
        box-sizing: border-box;
    }
`;