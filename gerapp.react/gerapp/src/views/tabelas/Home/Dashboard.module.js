import styled from 'styled-components';


export const DashboardContainer = styled.div`
    width: 95%;
    height: 85%;
    -webkit-box-shadow: 4px 12px 45px 9px rgba(0,0,0,0.56);
    -moz-box-shadow: 4px 12px 45px 9px rgba(0,0,0,0.56);
    box-shadow: 4px 12px 45px 9px rgba(0,0,0,0.56);
`;

export const HeaderDashContainer = styled.div`
    width: 90%;
    height: 30%;
    margin: 0 auto;
    margin-top: 10px;
    border: ${props => props.theme.colors.border};
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    justify-content: center;

`;

export const CardContainer = styled.div`
    width: 33%;
    height: 80%;
    border: ${props => props.theme.colors.border};
    background-size: cover;
    position: relative;
    overflow: none;
`;

export const ImgCard = styled.img`
        width: 100%;
        height: 100%;
        opacity: 0.1;
        position: absolute;
`;

export const HeaderInfo = styled.h2`
    text-align: center;
    margin: 20px;
    font-size: 30px;
`;

export const HeaderValue = styled.h2`
    text-align: center;
    margin: 20px;
    font-size: 50px;
`;