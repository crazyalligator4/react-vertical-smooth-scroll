// dependencies
import React from 'react';
// components
import {
  ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
  ServicesIcon, ServicesH2, ServicesP, ServicesSubtitle, Button,
} from './FeatureElements';
import IconBuild from '../../images/build.png';
import IconEvolve from '../../images/evolve.png';
import IconFarm from '../../images/farm.png';
import IconFight from '../../images/fight.png';
import IconTrade from '../../images/trade.png';

const Features = () => {
  const serviceText = 'Apes of Empires is inspired in the well known game Age of Empires.' +
    'Form your tribe of apes, build an army and fight the diferent enemies in this Play-to-Earn' +
    ' blockchain based game.';

  return (
    <ServicesContainer id='features'>
      <ServicesH1>Breed, Grow, ​Build, Farm, Trade, Fight, Evolve</ServicesH1>
      <ServicesSubtitle>{serviceText}</ServicesSubtitle>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={IconFarm}/>
          <ServicesH2>Breed & Grow</ServicesH2>
          <ServicesP>Breed your apes and grow them by staking on different buildings.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={IconBuild}/>
          <ServicesH2>Build & Farm</ServicesH2>
          <ServicesP>Build and farm by staking your apes.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={IconTrade}/>
          <ServicesH2>Trade</ServicesH2>
          <ServicesP>Trade your apes, buildings, weapons and armors.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={IconFight}/>
          <ServicesH2>Fight</ServicesH2>
          <ServicesP>Fight against the tribe enemies and engage into PvP battles.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={IconEvolve}/>
          <ServicesH2>Evolve</ServicesH2>
          <ServicesP>Evolve your tribe into a new era and unlock new buildings,  resources and more.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <Button
          href='https://docs.apesofempires.com/'
          target='_blank'
        >
          Documentation
        </Button>
    </ServicesContainer>
  )
}

export default Features;
