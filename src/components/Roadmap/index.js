// dependencies
import React from 'react';
// components
import {
  RoadmapContainer, RoadmapH1, RoadmapWrapper, RoadmapCard,
  RoadmapIcon, RoadmapH2, RoadmapUl,
} from './RoadmapElements';
import IconMnky1 from '../../images/red_monkey.png';
import IconMnky2 from '../../images/farmer_monkey.png';
import IconMnky3 from '../../images/warrior_monkey.png';

const Roadmap = () => {
  return (
    <RoadmapContainer id='roadmap'>
      <RoadmapH1>Roadmap</RoadmapH1>
      <RoadmapWrapper>
        <RoadmapCard>
          <RoadmapIcon src={IconMnky1}/>
          <RoadmapH2>Phase 1</RoadmapH2>
          <RoadmapUl>
            <li>Design of all characters</li>
            <li>Design of resources and buildings</li>
            <li>Launch of Website</li>
            <li>Marketing</li>
            <li>Pre-Sale</li>
            <li>Listing on PancakeSwap</li>
            <li>Marketplace launch</li>
          </RoadmapUl>
        </RoadmapCard>
        <RoadmapCard>
          <RoadmapIcon src={IconMnky2}/>
          <RoadmapH2>Phase 2</RoadmapH2>
          <RoadmapUl>
            <li>Game launch</li>
            <li>CG and CMC listing</li>
            <li>CEX listing</li>
            <li>Weapons and Armors</li>
            <li>Tribe vs Tribe launch</li>
          </RoadmapUl>
        </RoadmapCard>
        <RoadmapCard>
          <RoadmapIcon src={IconMnky3}/>
          <RoadmapH2>Phase 3</RoadmapH2>
          <RoadmapUl>
            <li>Evolution</li>
            <li>Partnerships</li>
            <li>Android and iOS App</li>
            <li>Ranking system</li>
          </RoadmapUl>
        </RoadmapCard>
      </RoadmapWrapper>
    </RoadmapContainer>
  )
}

export default Roadmap;
