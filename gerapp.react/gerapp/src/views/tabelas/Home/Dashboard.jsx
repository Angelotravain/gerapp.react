import React from 'react'
import {
    DashboardContainer,
    HeaderDashContainer,
    CardContainer,
    ImgCard,
    HeaderInfo,
    HeaderValue
} from './Dashboard.module'

const Dashboard = () => {
    return (
        <DashboardContainer>
            <HeaderDashContainer>
                <CardContainer>
                    {/* <ImgCard src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-bleu.png" alt="" /> */}
                    <HeaderInfo>Locações no mês</HeaderInfo>
                    <HeaderValue>45</HeaderValue>
                </CardContainer>
                <CardContainer>
                    <HeaderInfo>Agendamentos</HeaderInfo>
                    <HeaderValue>200</HeaderValue>
                </CardContainer>
                <CardContainer>
                    <HeaderInfo>Faturamento</HeaderInfo>
                    <HeaderValue>R$ 34.000,00
                    </HeaderValue>
                </CardContainer>
            </HeaderDashContainer>
        </DashboardContainer>
    )
}

export default Dashboard