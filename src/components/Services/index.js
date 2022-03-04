import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduza Gastos</ServicesH2>
          <ServicesP>
            Nós te ajudamos a reduzir seus gastos e melhoramos sua renda com propostas de investimentos!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Ambiente Virtual</ServicesH2>
          <ServicesP>
            Você tem acesso a nossa plataforma em qualquer lugar do mundo.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Benefícios Premium</ServicesH2>
          <ServicesP>
            Desbloqueie nosso cartão exclusivo e ganhe 3% de cashback no final de toda sua fatura mensal.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
