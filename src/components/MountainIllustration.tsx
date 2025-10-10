import React from 'react';
import styled from 'styled-components';

const IllustrationContainer = styled.div`
  width: 200px;
  height: 120px;
  background: linear-gradient(to bottom, #87CEEB 0%, #87CEEB 70%, #E0F6FF 100%);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 25px auto;

  @media (max-width: 600px) {
    width: 160px;
    height: 100px;
  }
`;

const MountainPeak = styled.div<{ width: string; height: string; left: string; rotation?: string; zIndex?: number }>`
  position: absolute;
  bottom: 0;
  background: #2C3E50;
  border-radius: 50% 50% 0 0;
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  transform: ${props => props.rotation ? `rotate(${props.rotation})` : 'none'};
  z-index: ${props => props.zIndex || 1};
`;

const SnowCap = styled.div<{ width: string; height: string; left: string; bottom: string; rotation?: string; zIndex?: number }>`
  position: absolute;
  background: white;
  border-radius: 50% 50% 0 0;
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  transform: ${props => props.rotation ? `rotate(${props.rotation})` : 'none'};
  z-index: ${props => props.zIndex || 2};
`;

const MountainIllustration: React.FC = () => {
  return (
    <IllustrationContainer>
      <MountainPeak width="80px" height="60px" left="20px" rotation="-15deg" />
      <MountainPeak width="100px" height="80px" left="50px" zIndex={2} />
      <MountainPeak width="70px" height="50px" left="110px" rotation="15deg" />
      
      <SnowCap width="25px" height="15px" left="35px" bottom="45px" rotation="-15deg" />
      <SnowCap width="30px" height="18px" left="60px" bottom="62px" zIndex={3} />
      <SnowCap width="22px" height="12px" left="125px" bottom="38px" rotation="15deg" />
    </IllustrationContainer>
  );
};

export default MountainIllustration;
